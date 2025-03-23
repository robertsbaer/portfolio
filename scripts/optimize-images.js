import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

// Get current directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directory containing images
const imageDir = path.join(__dirname, '../src/assests');

// Get all image files
const imageFiles = fs.readdirSync(imageDir).filter(file => {
  const ext = path.extname(file).toLowerCase();
  return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
});

// Process each image
imageFiles.forEach(file => {
  const inputPath = path.join(imageDir, file);
  const outputPath = path.join(imageDir, file);
  
  console.log(`Optimizing ${inputPath}...`);
  
  try {
    // Use the sharp library directly instead of CLI
    sharp(inputPath)
      .resize(1200) // Resize to width 1200px, maintaining aspect ratio
      .jpeg({ quality: 80 })
      .png({ quality: 80 })
      .webp({ quality: 80 })
      .toFile(outputPath + '.tmp')
      .then(() => {
        // Replace original with optimized version
        fs.renameSync(outputPath + '.tmp', outputPath);
        console.log(`Successfully optimized ${file}`);
      })
      .catch(err => {
        console.error(`Error processing ${file}: ${err.message}`);
      });
  } catch (error) {
    console.error(`Error optimizing ${file}: ${error.message}`);
  }
});

console.log('Image optimization complete!');