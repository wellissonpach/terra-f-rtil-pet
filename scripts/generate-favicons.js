import sharp from 'sharp';

async function generateFavicons() {
  const img = sharp('public/logo2.png');
  
  // Extract green leaf bounding box
  const pad = 8;
  const leaf = await img.extract({
    left: Math.max(0, 617 - pad),
    top: Math.max(0, 12 - pad),
    width: 347 + pad * 2,
    height: 396 + pad * 2
  }).png().toBuffer();
  
  // Create 512x512 with transparent background and centered leaf
  const resizedLeaf = await sharp(leaf)
    .resize(420, 420, { fit: 'inside', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([{ input: resizedLeaf, gravity: 'center' }])
    .png()
    .toFile('public/favicon-512x512.png');

  // Generate standard sizes
  await sharp('public/favicon-512x512.png').resize(192, 192).png().toFile('public/favicon-192x192.png');
  await sharp('public/favicon-512x512.png').resize(180, 180).png().toFile('public/apple-touch-icon.png');
  await sharp('public/favicon-512x512.png').resize(32, 32).png().toFile('public/favicon-32x32.png');
  await sharp('public/favicon-512x512.png').resize(16, 16).png().toFile('public/favicon-16x16.png');
  await sharp('public/favicon-512x512.png').resize(48, 48).png().toFile('public/favicon.ico');
  await sharp('public/favicon-512x512.png').resize(64, 64).png().toFile('public/favicon.png');

  console.log('✅ Favicons com a folha verde gerados com sucesso na pasta public/!');
}

generateFavicons();
