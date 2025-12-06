/**
 * Generate PNG icons from SVG using sharp
 * Run with: node create-icons.js
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const svgPath = path.join(__dirname, 'icons', 'icon.svg');
const iconsDir = path.join(__dirname, 'icons');
const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

async function generateIcons() {
    console.log('Generating PNG icons from SVG...\n');

    // Read the SVG file
    const svgBuffer = fs.readFileSync(svgPath);

    for (const size of sizes) {
        const outputPath = path.join(iconsDir, `icon-${size}.png`);

        await sharp(svgBuffer, { density: 300 })
            .resize(size, size, {
                fit: 'contain',
                background: { r: 245, g: 235, b: 224, alpha: 1 }
            })
            .png()
            .toFile(outputPath);

        console.log(`✓ Generated icon-${size}.png`);
    }

    console.log('\nAll icons generated successfully!');
}

generateIcons().catch(err => {
    console.error('Error generating icons:', err);
    process.exit(1);
});
