import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const userImagePath = 'C:/Users/welli/.gemini/antigravity-ide/brain/e67372cc-1155-460a-a5c0-f175b57ab80c/.user_uploaded/media_1787173701504.jpg';
const outputPosterWebp = 'public/background/poster.webp';
const outputPosterJpg = 'public/background/poster.jpg';

async function generatePoster() {
  if (!fs.existsSync(userImagePath)) {
    console.error('User image not found at', userImagePath);
    return;
  }

  // Optimize and save as highly compressed webp and jpg
  await sharp(userImagePath)
    .webp({ quality: 82, effort: 6 })
    .toFile(outputPosterWebp);

  await sharp(userImagePath)
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(outputPosterJpg);

  console.log('Successfully generated posters at public/background/poster.webp and poster.jpg');
}

generatePoster();
