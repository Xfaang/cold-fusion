#!/usr/bin/env node

// Validate PL vs EN consistency in cold-fusion project
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('=== TASK 5: PL vs EN CONSISTENCY CHECK ===\n');

// Read the i18n file
const i18nPath = path.join(__dirname, 'src/i18n.ts');
const i18nContent = fs.readFileSync(i18nPath, 'utf8');

// Extract all translation keys used in components
const findUsedKeys = () => {
  const usedKeys = new Set();
  const componentsDir = path.join(__dirname, 'src/components');
  
  const walkDir = (dir) => {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        // Find t('key') or t("key") patterns
        const matches = content.match(/t\(\s*['"`]([^'"`]+)['"`]\s*\)/g);
        if (matches) {
          matches.forEach(match => {
            const key = match.match(/t\(\s*['"`]([^'"`]+)['"`]\s*\)/)[1];
            usedKeys.add(key);
          });
        }
      }
    }
  };
  
  walkDir(componentsDir);
  return Array.from(usedKeys);
};

// Extract keys from each language section
const extractKeysFromLang = (langSection) => {
  const keyPattern = /^\s*(\w+):\s*/gm;
  const keys = new Set();
  let match;
  while ((match = keyPattern.exec(langSection)) !== null) {
    keys.add(match[1]);
  }
  return keys;
};

// Get all translation keys
const plSection = i18nContent.match(/pl: {([\s\S]*?)},\s*en: {/);
const enSection = i18nContent.match(/en: {([\s\S]*?)}\s*};/);

if (!plSection || !enSection) {
  console.error('Could not extract language sections');
  process.exit(1);
}

const plKeys = extractKeysFromLang(plSection[1]);
const enKeys = extractKeysFromLang(enSection[1]);
const usedKeys = findUsedKeys();

console.log('1. Translation key counts:');
console.log(`   Polish keys: ${plKeys.size}`);
console.log(`   English keys: ${enKeys.size}`);
console.log(`   Keys used in components: ${usedKeys.length}`);

// Check for missing keys
const missingInPL = [...enKeys].filter(key => !plKeys.has(key));
const missingInEN = [...plKeys].filter(key => !enKeys.has(key));

console.log('\n2. Missing keys analysis:');
if (missingInPL.length > 0) {
  console.log(`   ❌ Missing in Polish: ${missingInPL.join(', ')}`);
} else {
  console.log('   ✅ No keys missing in Polish');
}

if (missingInEN.length > 0) {
  console.log(`   ❌ Missing in English: ${missingInEN.join(', ')}`);
} else {
  console.log('   ✅ No keys missing in English');
}

// Check for unused keys
const unusedKeys = [...plKeys].filter(key => !usedKeys.includes(key));

console.log('\n3. Key usage analysis:');
console.log(`   Used keys: ${usedKeys.length}`);
console.log(`   Unused keys: ${unusedKeys.length}`);
if (unusedKeys.length > 0 && unusedKeys.length < 20) {
  console.log(`   Unused: ${unusedKeys.slice(0, 10).join(', ')}${unusedKeys.length > 10 ? '...' : ''}`);
}

// Check for keys that exist in components but not in translations
const missingTranslations = usedKeys.filter(key => !plKeys.has(key) || !enKeys.has(key));

console.log('\n4. Components using missing translation keys:');
if (missingTranslations.length > 0) {
  console.log(`   ❌ Missing translations for used keys: ${missingTranslations.join(', ')}`);
} else {
  console.log('   ✅ All used keys have translations');
}

// Check specific timeline keys as an example
console.log('\n5. Timeline keys validation:');
const timelineKeys = [
  'timeline1989_1', 'timeline1989_2', 'timeline1989_3', 'timeline1989_4',
  'timeline1990_1', 'timeline1990_2', 'timeline1992', 'timeline2004',
  'timeline2019_1', 'timeline2019_2', 'timeline2025', 'timeline2026'
];

const missingTimelineKeys = timelineKeys.filter(key => !plKeys.has(key) || !enKeys.has(key));
if (missingTimelineKeys.length > 0) {
  console.log(`   ❌ Missing timeline keys: ${missingTimelineKeys.join(', ')}`);
} else {
  console.log('   ✅ All timeline keys present in both languages');
}

// Summary
const issues = missingInPL.length + missingInEN.length + missingTranslations.length + missingTimelineKeys.length;

console.log('\n=== CONSISTENCY CHECK SUMMARY ===');
if (issues === 0) {
  console.log('✅ Perfect consistency between PL and EN translations!');
  console.log('✅ All component keys have translations');
  console.log('✅ Task 5: COMPLETED - Check consistency PL vs EN');
} else {
  console.log(`❌ Found ${issues} consistency issues that need attention`);
  console.log('⚠️  Task 5: Issues found - manual fixes needed');
}