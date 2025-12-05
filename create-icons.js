/**
 * Simple Node.js script to create placeholder PNG icons
 * Run with: node create-icons.js
 *
 * For proper icons, open generate-icons.html in a browser
 * and download the generated icons.
 */

const fs = require('fs');
const path = require('path');

// Simple PNG creator for solid color icons with basic shape
// This creates a minimal valid PNG file

function createPNG(size) {
    // PNG signature
    const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

    // Helper to create CRC
    function crc32(data) {
        let crc = -1;
        for (let i = 0; i < data.length; i++) {
            crc ^= data[i];
            for (let j = 0; j < 8; j++) {
                crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
            }
        }
        return (crc ^ -1) >>> 0;
    }

    function createChunk(type, data) {
        const typeBuffer = Buffer.from(type);
        const length = Buffer.alloc(4);
        length.writeUInt32BE(data.length);

        const combined = Buffer.concat([typeBuffer, data]);
        const crc = Buffer.alloc(4);
        crc.writeUInt32BE(crc32(combined));

        return Buffer.concat([length, combined, crc]);
    }

    // IHDR chunk
    const ihdr = Buffer.alloc(13);
    ihdr.writeUInt32BE(size, 0);  // width
    ihdr.writeUInt32BE(size, 4);  // height
    ihdr.writeUInt8(8, 8);         // bit depth
    ihdr.writeUInt8(2, 9);         // color type (RGB)
    ihdr.writeUInt8(0, 10);        // compression
    ihdr.writeUInt8(0, 11);        // filter
    ihdr.writeUInt8(0, 12);        // interlace

    // Create simple image data (cream/beige background)
    const rawData = [];
    for (let y = 0; y < size; y++) {
        rawData.push(0); // filter byte
        for (let x = 0; x < size; x++) {
            // Create a simple gradient effect
            const centerX = size / 2;
            const centerY = size / 2;
            const dist = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
            const maxDist = size * 0.7;

            if (dist < maxDist * 0.5) {
                // Amber/gold center (syrup drop)
                rawData.push(221, 161, 94); // RGB
            } else if (dist < maxDist * 0.7) {
                // Sage green ring (leaf accent)
                rawData.push(163, 177, 138);
            } else {
                // Cream background
                rawData.push(245, 235, 224);
            }
        }
    }

    // Compress with zlib (using Node's built-in zlib)
    const zlib = require('zlib');
    const compressed = zlib.deflateSync(Buffer.from(rawData));

    const idatChunk = createChunk('IDAT', compressed);
    const ihdrChunk = createChunk('IHDR', ihdr);
    const iendChunk = createChunk('IEND', Buffer.alloc(0));

    return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// Create icons directory if it doesn't exist
const iconsDir = path.join(__dirname, 'icons');
if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir);
}

// Generate icons
const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

sizes.forEach(size => {
    const png = createPNG(size);
    const filename = path.join(iconsDir, `icon-${size}.png`);
    fs.writeFileSync(filename, png);
    console.log(`Created ${filename}`);
});

console.log('\nPlaceholder icons created!');
console.log('For better icons, open generate-icons.html in a browser.');
