#!/usr/bin/env python3
import re

print("=== FIXING SMART QUOTES IN i18n.ts ===")

with open('src/i18n.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Count smart quotes
left_double = content.count('"')
right_double = content.count('"')
left_single = content.count(''')
right_single = content.count(''')
total_smart = left_double + right_double + left_single + right_single

print(f"Original smart quotes count: {total_smart}")
print(f"  Left double: {left_double}, Right double: {right_double}")
print(f"  Left single: {left_single}, Right single: {right_single}")

# Replace smart quotes with regular quotes
content = content.replace('"', '"')
content = content.replace('"', '"')
content = content.replace(''', "'")
content = content.replace(''', "'")

# Fix multiple spaces (but preserve indentation)
lines = content.split('\n')
fixed_lines = []
for line in lines:
    # Only fix multiple spaces in the middle of lines, not at the beginning (indentation)
    if line.strip():  # if line has content
        indent = len(line) - len(line.lstrip())
        content_part = line[indent:]
        # Fix multiple spaces in content
        content_part = re.sub(r'  +', ' ', content_part)
        fixed_lines.append(' ' * indent + content_part)
    else:
        fixed_lines.append(line)

content = '\n'.join(fixed_lines)

with open('src/i18n.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Smart quotes and multiple spaces fixed!")

# Verify
with open('src/i18n.ts', 'r', encoding='utf-8') as f:
    content = f.read()
    
left_double = content.count('"')
right_double = content.count('"')
left_single = content.count(''')
right_single = content.count(''')
remaining_smart = left_double + right_double + left_single + right_single

print(f"Remaining smart quotes: {remaining_smart}")

# Check if file is still valid TypeScript
print("Checking TypeScript syntax...")
import subprocess
try:
    result = subprocess.run(['node', '-c', 'src/i18n.ts'], capture_output=True, text=True)
    if result.returncode == 0:
        print("✅ File syntax is valid")
    else:
        print(f"❌ Syntax error: {result.stderr}")
except:
    print("⚠️ Could not verify syntax (node not found)")