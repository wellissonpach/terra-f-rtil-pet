import sharp from 'sharp';

async function process() {
  const image = sharp('public/logo2.png');
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // Create RGBA buffer
  const outBuffer = Buffer.alloc(width * height * 4);

  let minX = width, maxX = 0, minY = height, maxY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const srcIdx = (y * width + x) * channels;
      const dstIdx = (y * width + x) * 4;

      const r = data[srcIdx];
      const g = data[srcIdx + 1];
      const b = data[srcIdx + 2];

      let alpha = 0;
      let outR = r;
      let outG = g;
      let outB = b;

      // Check if pixel is part of the green leaf
      const isGreen = g > 75 && g > r * 1.15 && g > b * 1.15;
      
      // Check if pixel is white / light text
      // In antialiased edges, brightness ramps up from gray to white.
      // Background checkerboard max brightness is ~95.
      const brightness = 0.299 * r + 0.587 * g + 0.114 * b;

      if (isGreen) {
        // Green leaf: full opacity
        alpha = 255;
      } else if (brightness > 130) {
        // High brightness: white text
        // Smooth alpha for antialiasing between 130 and 190
        if (brightness >= 190) {
          alpha = 255;
          outR = 255;
          outG = 255;
          outB = 255;
        } else {
          const factor = (brightness - 130) / (190 - 130);
          alpha = Math.round(factor * 255);
          outR = 255;
          outG = 255;
          outB = 255;
        }
      } else {
        // Background checkerboard
        alpha = 0;
      }

      outBuffer[dstIdx] = outR;
      outBuffer[dstIdx + 1] = outG;
      outBuffer[dstIdx + 2] = outB;
      outBuffer[dstIdx + 3] = alpha;

      if (alpha > 20) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  console.log(`Bounding Box: minX=${minX}, maxX=${maxX}, minY=${minY}, maxY=${maxY}`);
  const cropWidth = maxX - minX + 1;
  const cropHeight = maxY - minY + 1;
  console.log(`Crop size: ${cropWidth}x${cropHeight}`);

  // Create full transparent image and cropped version
  const transparentImage = sharp(outBuffer, {
    raw: {
      width,
      height,
      channels: 4
    }
  });

  // Save the cropped transparent version directly as public/logo2.png (and backup original if needed)
  // Let's add a small padding (10px)
  const pad = 12;
  const extractLeft = Math.max(0, minX - pad);
  const extractTop = Math.max(0, minY - pad);
  const extractWidth = Math.min(width - extractLeft, cropWidth + pad * 2);
  const extractHeight = Math.min(height - extractTop, cropHeight + pad * 2);

  await transparentImage
    .extract({ left: extractLeft, top: extractTop, width: extractWidth, height: extractHeight })
    .png()
    .toFile('public/logo2.png');

  console.log('Successfully saved transparent cropped public/logo2.png!');
}

process();
