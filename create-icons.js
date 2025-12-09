const fs = require('fs');
const { createCanvas } = require('canvas');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

function drawIcon(ctx, size) {
    const s = size / 512;

    // Background gradient
    const bgGrad = ctx.createLinearGradient(0, 0, size, size);
    bgGrad.addColorStop(0, '#0a0a2e');
    bgGrad.addColorStop(1, '#1a1a4a');

    // Rounded rectangle background
    const radius = 100 * s;
    ctx.beginPath();
    ctx.moveTo(radius, 0);
    ctx.lineTo(size - radius, 0);
    ctx.quadraticCurveTo(size, 0, size, radius);
    ctx.lineTo(size, size - radius);
    ctx.quadraticCurveTo(size, size, size - radius, size);
    ctx.lineTo(radius, size);
    ctx.quadraticCurveTo(0, size, 0, size - radius);
    ctx.lineTo(0, radius);
    ctx.quadraticCurveTo(0, 0, radius, 0);
    ctx.closePath();
    ctx.fillStyle = bgGrad;
    ctx.fill();

    // Stars
    const stars = [
        [80, 100, 2], [150, 60, 1.5], [420, 80, 2], [380, 140, 1.5],
        [60, 200, 1], [450, 250, 2], [100, 400, 1.5], [400, 420, 2],
        [200, 450, 1], [320, 470, 1.5]
    ];
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    stars.forEach(([x, y, r]) => {
        ctx.beginPath();
        ctx.arc(x * s, y * s, r * s, 0, Math.PI * 2);
        ctx.fill();
    });

    // Galaxy center
    ctx.save();
    ctx.translate(256 * s, 256 * s);
    ctx.rotate(-30 * Math.PI / 180);

    // Outer glow
    const glowGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, 140 * s);
    glowGrad.addColorStop(0, 'rgba(138, 79, 255, 0.4)');
    glowGrad.addColorStop(0.5, 'rgba(74, 111, 255, 0.2)');
    glowGrad.addColorStop(1, 'rgba(74, 111, 255, 0)');

    ctx.fillStyle = glowGrad;
    ctx.beginPath();
    ctx.ellipse(0, 0, 140 * s, 80 * s, 0, 0, Math.PI * 2);
    ctx.fill();

    // Spiral arms
    ctx.strokeStyle = 'rgba(122, 159, 255, 0.6)';
    ctx.lineWidth = 8 * s;
    ctx.lineCap = 'round';

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(60 * s, -40 * s, 100 * s, -20 * s);
    ctx.quadraticCurveTo(140 * s, 10 * s, 120 * s, 60 * s);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(-60 * s, 40 * s, -100 * s, 20 * s);
    ctx.quadraticCurveTo(-140 * s, -10 * s, -120 * s, -60 * s);
    ctx.stroke();

    // Core glow
    const coreGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, 40 * s);
    coreGrad.addColorStop(0, 'rgba(255, 255, 238, 1)');
    coreGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.9)');
    coreGrad.addColorStop(1, 'rgba(200, 200, 255, 0.3)');

    ctx.fillStyle = coreGrad;
    ctx.beginPath();
    ctx.ellipse(0, 0, 40 * s, 25 * s, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();

    // Telescope at bottom
    ctx.save();
    ctx.translate(256 * s, 420 * s);
    ctx.strokeStyle = 'rgba(102, 136, 204, 0.6)';
    ctx.lineWidth = 4 * s;

    ctx.beginPath();
    ctx.arc(0, 0, 25 * s, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 25 * s);
    ctx.lineTo(0, 50 * s);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(-15 * s, 50 * s);
    ctx.lineTo(15 * s, 50 * s);
    ctx.stroke();

    ctx.restore();
}

// Check if canvas module is available
try {
    sizes.forEach(size => {
        const canvas = createCanvas(size, size);
        const ctx = canvas.getContext('2d');
        drawIcon(ctx, size);
        const buffer = canvas.toBuffer('image/png');
        fs.writeFileSync(`icons/icon-${size}.png`, buffer);
        console.log(`Created icon-${size}.png`);
    });
    console.log('All icons created successfully!');
} catch (e) {
    console.log('Canvas module not available. Please create icons manually using generate-icons.html');
    console.log('Or install canvas: npm install canvas');
}
