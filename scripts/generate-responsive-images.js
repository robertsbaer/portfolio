import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

// Get current directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directory containing images
const imageDir = path.join(__dirname, '../src/assests');
const outputDir = path.join(__dirname, '../public/images');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Sizes for responsive images
const sizes = [320, 640, 960, 1280];

// Get all image files
const imageFiles = fs.readdirSync(imageDir).filter(file => {
  const ext = path.extname(file).toLowerCase();
  return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
});

// Process each image
async function processImages() {
  for (const file of imageFiles) {
    const inputPath = path.join(imageDir, file);
    const fileName = path.basename(file, path.extname(file));
    const ext = path.extname(file).toLowerCase();
    
    console.log(`Processing ${inputPath}...`);
    
    try {
      // Generate responsive versions
      for (const size of sizes) {
        const outputPath = path.join(outputDir, `${fileName}-${size}${ext}`);
        
        await sharp(inputPath)
          .resize(size)
          .toFile(outputPath);
        
        console.log(`Created ${outputPath}`);
      }
      
      // Also create a WebP version for each size
      if (ext !== '.webp') {
        for (const size of sizes) {
          const outputPath = path.join(outputDir, `${fileName}-${size}.webp`);
          
          await sharp(inputPath)
            .resize(size)
            .webp({ quality: 80 })
            .toFile(outputPath);
          
          console.log(`Created WebP: ${outputPath}`);
        }
      }
      
      console.log(`Successfully processed ${file}`);
    } catch (error) {
      console.error(`Error processing ${file}: ${error.message}`);
    }
  }
}

processImages()
  .then(() => console.log('All images processed successfully!'))
  .catch(err => console.error('Error processing images:', err));