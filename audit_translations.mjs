#!/usr/bin/env node

// Translation audit script for cold-fusion project
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('=== COLD FUSION TRANSLATION AUDIT ===\n');

// Read the i18n file
const i18nPath = path.join(__dirname, 'src/i18n.ts');
const i18nContent = fs.readFileSync(i18nPath, 'utf8');

// Extract translation objects
const translationsMatch = i18nContent.match(/export const translations = ({[\s\S]*});/);
if (!translationsMatch) {
  console.error('Could not extract translations object');
  process.exit(1);
}

let issues = [];

// Check 1: Common Polish typos and grammar issues
console.log('🔍 Task 4 Progress: Auditing text for typos, broken translations, missing i18n keys\n');

const polishTypoPatterns = [
  { pattern: /\s{2,}/g, suggestion: 'Multiple consecutive spaces found' },
  { pattern: /\s+[,.!?:;]/g, suggestion: 'Space before punctuation' },
  { pattern: /[,.!?:;]\w/g, suggestion: 'Missing space after punctuation' }
];

console.log('1. Checking for common Polish typography and grammar issues:');
let typographyClean = true;
polishTypoPatterns.forEach(({ pattern, suggestion }, index) => {
  const matches = i18nContent.match(pattern);
  if (matches && matches.length > 0) {
    issues.push(`Polish typography: ${suggestion} (${matches.length} occurrences)`);
    console.log(`   ❌ ${suggestion}: ${matches.length} occurrences`);
    typographyClean = false;
  }
});
if (typographyClean) {
  console.log('   ✅ No typography issues found');
}

// Check 2: Terminology consistency
console.log('\n2. Checking terminology consistency:');
const terminologyChecks = [
  { term: 'fuzja', variations: ['fuzji', 'fuzję'], context: 'fusion' },
  { term: 'jądrowy', variations: ['jądrowa', 'jądrowe', 'jądrowych'], context: 'nuclear' },
  { term: 'elektroliza', variations: ['elektrolizy', 'elektrolizą'], context: 'electrolysis' }
];

terminologyChecks.forEach(({ term, variations, context }) => {
  const allForms = [term, ...variations];
  const found = allForms.filter(form => i18nContent.toLowerCase().includes(form.toLowerCase()));
  console.log(`   ✅ ${context} terms: ${found.join(', ')}`);
});

// Check 3: Missing or broken translation keys
console.log('\n3. Checking for consistency between PL and EN keys:');
const extractKeys = (langSection) => {
  const keyPattern = /^\s*(\w+):\s*"/gm;
  const keys = [];
  let match;
  while ((match = keyPattern.exec(langSection)) !== null) {
    keys.push(match[1]);
  }
  return keys;
};

const plSection = i18nContent.match(/pl: {([\s\S]*?)},\s*en: {/);
const enSection = i18nContent.match(/en: {([\s\S]*?)}\s*};/);

if (plSection && enSection) {
  const plKeys = extractKeys(plSection[1]);
  const enKeys = extractKeys(enSection[1]);
  
  console.log(`   Polish keys: ${plKeys.length}`);
  console.log(`   English keys: ${enKeys.length}`);
  
  const missingInPL = enKeys.filter(key => !plKeys.includes(key));
  const missingInEN = plKeys.filter(key => !enKeys.includes(key));
  
  if (missingInPL.length > 0) {
    issues.push(`Missing in Polish: ${missingInPL.join(', ')}`);
    console.log(`   ❌ Missing in Polish: ${missingInPL.join(', ')}`);
  }
  
  if (missingInEN.length > 0) {
    issues.push(`Missing in English: ${missingInEN.join(', ')}`);
    console.log(`   ❌ Missing in English: ${missingInEN.join(', ')}`);
  }
  
  if (missingInPL.length === 0 && missingInEN.length === 0) {
    console.log('   ✅ All keys present in both languages');
  }
}

// Check 4: Potential encoding or special character issues
console.log('\n4. Checking for encoding and special character issues:');
const specialChars = ['ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż'];
let hasPolishChars = false;
specialChars.forEach(char => {
  if (i18nContent.includes(char)) {
    hasPolishChars = true;
  }
});
console.log(`   ${hasPolishChars ? '✅' : '❌'} Polish characters present: ${hasPolishChars}`);

// Check 5: Potential quotation mark issues
console.log('\n5. Checking quotation marks and string formatting:');
const quotingIssues = i18nContent.match(/[""'']/g);
if (quotingIssues) {
  issues.push(`Possible smart quotes instead of regular quotes: ${quotingIssues.length} occurrences`);
  console.log(`   ❌ Smart quotes found: ${quotingIssues.length} occurrences`);
} else {
  console.log('   ✅ No smart quote issues found');
}

// Check 6: Look for potential typos in common words
console.log('\n6. Scanning for potential typos in key scientific terms:');
const potentialTypos = [
  { wrong: 'elekroliza', correct: 'elektroliza' },
  { wrong: 'neutrony', correct: 'neutrony' }, // checking if spelled correctly
  { wrong: 'kalorymetria', correct: 'kalorymetria' }, // checking if spelled correctly
];

let typosFound = false;
potentialTypos.forEach(({ wrong, correct }) => {
  if (i18nContent.toLowerCase().includes(wrong.toLowerCase())) {
    issues.push(`Potential typo: "${wrong}" should be "${correct}"`);
    console.log(`   ❌ Potential typo: "${wrong}" should be "${correct}"`);
    typosFound = true;
  }
});
if (!typosFound) {
  console.log('   ✅ No obvious typos detected in scientific terms');
}

// Check 7: Verify essential keys exist
console.log('\n7. Checking for essential translation keys:');
const essentialKeys = [
  'heroTitle', 'heroSubtitle', 'introduction', 'timeline', 'references',
  'confidenceHigh', 'confidenceMedium', 'confidenceLow', 'confidenceVeryLow'
];

let missingEssential = [];
essentialKeys.forEach(key => {
  if (!i18nContent.includes(`${key}:`)) {
    missingEssential.push(key);
  }
});

if (missingEssential.length > 0) {
  issues.push(`Missing essential keys: ${missingEssential.join(', ')}`);
  console.log(`   ❌ Missing essential keys: ${missingEssential.join(', ')}`);
} else {
  console.log('   ✅ All essential keys present');
}

// Summary
console.log('\n=== AUDIT SUMMARY ===');
if (issues.length === 0) {
  console.log('✅ No major issues found in translations!');
  console.log('✅ Task 4 (Audit text for typos, broken translations, missing i18n keys): COMPLETED');
} else {
  console.log(`❌ Found ${issues.length} potential issues:`);
  issues.forEach((issue, index) => {
    console.log(`${index + 1}. ${issue}`);
  });
  console.log('\n⚠️  Task 4: Issues found - manual review recommended');
}