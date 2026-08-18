import sharp from 'sharp';
import fs from 'fs';

async function analyze() {
  const image = sharp('public/logo2.png');
  const metadata = await image.metadata();
  console.log('Metadata:', metadata);

  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  console.log('Info:', info);

  // Sample top-left corner checkerboard colors
  const cornerColors = new Set();
  for (let y = 0; y < 100; y += 10) {
    for (let x = 0; x < 100; x += 10) {
      const idx = (y * info.width + x) * info.channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      cornerColors.add(`rgb(${r},${g},${b})`);
    }
  }
  console.log('Sample background colors in top-left 100x100:', Array.from(cornerColors));
}

analyze();
