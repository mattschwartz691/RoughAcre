#!/usr/bin/env python3
from PIL import Image, ImageDraw
import math
import os

sizes = [72, 96, 128, 144, 152, 192, 384, 512]

def draw_icon(size):
    # Create image with alpha channel
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    s = size / 512  # scale factor

    # Background - rounded rectangle
    radius = int(100 * s)
    bg_color = (15, 15, 45, 255)  # Dark blue

    # Draw rounded rectangle background
    draw.rounded_rectangle([(0, 0), (size-1, size-1)], radius=radius, fill=bg_color)

    # Stars
    stars = [
        (80, 100, 2), (150, 60, 1.5), (420, 80, 2), (380, 140, 1.5),
        (60, 200, 1), (450, 250, 2), (100, 400, 1.5), (400, 420, 2),
        (200, 450, 1), (320, 470, 1.5)
    ]
    for x, y, r in stars:
        sx, sy, sr = int(x * s), int(y * s), max(1, int(r * s))
        draw.ellipse([(sx-sr, sy-sr), (sx+sr, sy+sr)], fill=(255, 255, 255, 180))

    # Galaxy core position
    cx, cy = int(256 * s), int(256 * s)

    # Draw galaxy glow (multiple ellipses for gradient effect)
    for i in range(5, 0, -1):
        rx, ry = int(140 * s * i / 5), int(80 * s * i / 5)
        alpha = int(40 + (5 - i) * 20)
        color = (100, 80, 200, alpha)
        # Approximate ellipse rotation by drawing at offset
        draw.ellipse([(cx-rx, cy-ry), (cx+rx, cy+ry)], fill=color)

    # Draw spiral arms (simplified as arcs)
    arm_color = (122, 159, 255, 150)
    line_width = max(2, int(6 * s))

    # Draw some curved lines to suggest spiral arms
    points1 = []
    points2 = []
    for t in range(20):
        angle = t * 0.15
        r1 = 20 * s + t * 5 * s
        r2 = 20 * s + t * 5 * s
        x1 = cx + int(r1 * math.cos(angle - 0.5))
        y1 = cy + int(r1 * 0.5 * math.sin(angle - 0.5))
        x2 = cx - int(r2 * math.cos(angle - 0.5))
        y2 = cy - int(r2 * 0.5 * math.sin(angle - 0.5))
        points1.append((x1, y1))
        points2.append((x2, y2))

    if len(points1) > 1:
        draw.line(points1, fill=arm_color, width=line_width)
        draw.line(points2, fill=arm_color, width=line_width)

    # Galaxy core (bright center)
    core_r = int(35 * s)
    for i in range(5, 0, -1):
        r = int(core_r * i / 5)
        alpha = int(100 + (5 - i) * 30)
        color = (255, 255, 240, min(255, alpha + 50))
        draw.ellipse([(cx-r, cy-int(r*0.6)), (cx+r, cy+int(r*0.6))], fill=color)

    # Bright core center
    inner_r = int(15 * s)
    draw.ellipse([(cx-inner_r, cy-int(inner_r*0.6)), (cx+inner_r, cy+int(inner_r*0.6))],
                 fill=(255, 255, 250, 255))

    # Telescope at bottom
    tx, ty = int(256 * s), int(420 * s)
    tel_color = (102, 136, 204, 150)
    tel_r = int(25 * s)
    line_w = max(2, int(3 * s))

    # Telescope circle (lens)
    draw.ellipse([(tx-tel_r, ty-tel_r), (tx+tel_r, ty+tel_r)], outline=tel_color, width=line_w)

    # Telescope body
    draw.line([(tx, ty+tel_r), (tx, ty+int(50*s))], fill=tel_color, width=line_w)

    # Telescope base
    draw.line([(tx-int(15*s), ty+int(50*s)), (tx+int(15*s), ty+int(50*s))],
              fill=tel_color, width=line_w)

    return img

# Create icons directory if it doesn't exist
os.makedirs('icons', exist_ok=True)

# Generate all sizes
for size in sizes:
    img = draw_icon(size)
    filename = f'icons/icon-{size}.png'
    img.save(filename, 'PNG')
    print(f'Created {filename}')

print('All icons created successfully!')
