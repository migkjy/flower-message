import sharp from 'sharp';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const iconsDir = join(__dirname, '..', 'public', 'icons');

mkdirSync(iconsDir, { recursive: true });

function createFlowerSvg(size) {
  const center = size / 2;
  const petalR = size * 0.18;
  const petalDist = size * 0.22;
  const centerR = size * 0.12;
  const stemWidth = size * 0.04;
  const leafSize = size * 0.12;

  // 5 petals arranged in a circle
  const petals = [];
  for (let i = 0; i < 5; i++) {
    const angle = (i * 72 - 90) * Math.PI / 180;
    const px = center + petalDist * Math.cos(angle);
    const py = center * 0.85 + petalDist * Math.sin(angle);
    petals.push(`<circle cx="${px}" cy="${py}" r="${petalR}" fill="#F472B6" opacity="0.9"/>`);
  }

  // Outer petal highlights
  const highlights = [];
  for (let i = 0; i < 5; i++) {
    const angle = (i * 72 - 90) * Math.PI / 180;
    const px = center + petalDist * Math.cos(angle);
    const py = center * 0.85 + petalDist * Math.sin(angle);
    highlights.push(`<circle cx="${px}" cy="${py}" r="${petalR * 0.65}" fill="#FB7DC5" opacity="0.6"/>`);
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FDF2F8;stop-opacity:1"/>
      <stop offset="100%" style="stop-color:#FCE7F3;stop-opacity:1"/>
    </linearGradient>
    <linearGradient id="stem" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#4ADE80"/>
      <stop offset="100%" style="stop-color:#22C55E"/>
    </linearGradient>
  </defs>
  <!-- Background -->
  <rect width="${size}" height="${size}" rx="${size * 0.18}" fill="url(#bg)"/>
  <!-- Stem -->
  <line x1="${center}" y1="${center * 0.85 + petalDist}" x2="${center}" y2="${size * 0.88}" stroke="url(#stem)" stroke-width="${stemWidth}" stroke-linecap="round"/>
  <!-- Left leaf -->
  <ellipse cx="${center - leafSize}" cy="${size * 0.78}" rx="${leafSize * 0.8}" ry="${leafSize * 0.4}" fill="#4ADE80" transform="rotate(-30 ${center - leafSize} ${size * 0.78})"/>
  <!-- Right leaf -->
  <ellipse cx="${center + leafSize}" cy="${size * 0.72}" rx="${leafSize * 0.8}" ry="${leafSize * 0.4}" fill="#4ADE80" transform="rotate(30 ${center + leafSize} ${size * 0.72})"/>
  <!-- Petals -->
  ${petals.join('\n  ')}
  <!-- Petal highlights -->
  ${highlights.join('\n  ')}
  <!-- Center -->
  <circle cx="${center}" cy="${center * 0.85}" r="${centerR}" fill="#FBBF24"/>
  <circle cx="${center}" cy="${center * 0.85}" r="${centerR * 0.6}" fill="#FCD34D" opacity="0.7"/>
</svg>`;
}

const sizes = [192, 512];

for (const size of sizes) {
  const svg = createFlowerSvg(size);
  const svgBuffer = Buffer.from(svg);

  await sharp(svgBuffer)
    .png()
    .toFile(join(iconsDir, `icon-${size}x${size}.png`));

  console.log(`Generated icon-${size}x${size}.png`);
}

console.log('All icons generated successfully!');
