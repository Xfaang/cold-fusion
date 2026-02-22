#!/usr/bin/env node
/**
 * Post-build prerender: serves dist/, visits each route with Puppeteer,
 * saves the rendered HTML back. Crawlers see full content.
 */
import { execSync } from 'child_process';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, 'dist');
const PORT = 4173;
const ROUTES = ['/', '/full-research', '/caly-raport'];

async function prerender() {
  // Dynamic import puppeteer
  const puppeteer = await import('puppeteer');
  
  // Start preview server in background
  const { spawn } = await import('child_process');
  const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
    cwd: __dirname,
    stdio: 'pipe',
  });

  // Wait for server to start
  await new Promise(r => setTimeout(r, 2000));

  const browser = await puppeteer.default.launch({ 
    headless: true, 
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'] 
  });

  for (const route of ROUTES) {
    console.log(`Prerendering ${route}...`);
    const page = await browser.newPage();
    await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0', timeout: 15000 });
    
    // Wait a bit more for React to fully render
    await new Promise(r => setTimeout(r, 1000));
    
    const html = await page.content();
    
    // Write to dist
    const outPath = route === '/' 
      ? join(DIST, 'index.html')
      : join(DIST, route, 'index.html');
    
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, html, 'utf-8');
    console.log(`  → ${outPath} (${(html.length / 1024).toFixed(1)} KB)`);
    
    await page.close();
  }

  await browser.close();
  server.kill();
  console.log('Prerender complete!');
}

prerender().catch(err => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
