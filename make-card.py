#!/usr/bin/env python3
"""Compose social card programmatically with exact margins."""
from PIL import Image, ImageDraw, ImageFont
import os

W, H = 1280, 640
MARGIN = 80
BG = (13, 17, 23)  # #0d1117

img = Image.new("RGBA", (W, H), BG + (255,))
draw = ImageDraw.Draw(img)

# Load crystal
crystal_path = os.path.join(os.path.dirname(__file__), "crystal.png")
crystal = Image.open(crystal_path).convert("RGBA")
# Resize to fit right half
crystal_size = 480
crystal = crystal.resize((crystal_size, crystal_size), Image.LANCZOS)
# Place in right half, vertically centered
cx = W - MARGIN - crystal_size // 2 - 40
cy = H // 2
img.paste(crystal, (cx - crystal_size // 2, cy - crystal_size // 2), crystal)

# Try to load a nice font, fall back to default
font_paths = [
    "/System/Library/Fonts/Helvetica.ttc",
    "/System/Library/Fonts/SFNSDisplay.ttf",
    "/Library/Fonts/Arial.ttf",
    "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
]

def load_font(size, bold=False):
    for fp in font_paths:
        try:
            return ImageFont.truetype(fp, size, index=1 if bold and fp.endswith('.ttc') else 0)
        except:
            continue
    return ImageFont.load_default()

font_title = load_font(72, bold=True)
font_sub = load_font(28)
font_url = load_font(24)

# Text positioning - left half with equal margins
tx = MARGIN
ty_start = H // 2 - 100

# Title
draw.text((tx, ty_start), "Cold Fusion &", fill=(255, 255, 255), font=font_title)
draw.text((tx, ty_start + 80), "LENR Research", fill=(255, 255, 255), font=font_title)

# Subtitle
draw.text((tx, ty_start + 180), "Open Source Scientific Documentation", fill=(160, 170, 180), font=font_sub)

# URLs
draw.text((tx, ty_start + 220), "zimnafuzja.pl  •  cold-fusion.org", fill=(120, 130, 140), font=font_url)

# Atom icon placeholder (simple circles)
atom_cx, atom_cy = tx + 30, ty_start - 50
for angle_offset in [0, 60, 120]:
    import math
    a = math.radians(angle_offset)
    rx, ry = 25, 12
    points = []
    for t in range(0, 361, 5):
        rad = math.radians(t)
        x = atom_cx + rx * math.cos(rad) * math.cos(a) - ry * math.sin(rad) * math.sin(a)
        y = atom_cy + rx * math.cos(rad) * math.sin(a) + ry * math.sin(rad) * math.cos(a)
        points.append((x, y))
    draw.line(points, fill=(200, 200, 210, 180), width=1)
draw.ellipse((atom_cx-4, atom_cy-4, atom_cx+4, atom_cy+4), fill=(200, 200, 210))

out = os.path.join(os.path.dirname(__file__), "social-card-v4.png")
img.convert("RGB").save(out, "PNG")
print(f"Saved {out} ({os.path.getsize(out)} bytes)")
