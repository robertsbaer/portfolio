import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to your assets folder - corrected spelling from "assets" to "assets"
const imageDir = path.join(__dirname, '../src/assets');

function convertToWebP(directory) {
  if (!fs.existsSync(directory)) {
    console.log(`Directory does not exist: ${directory}`);
    return;
  }

  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      convertToWebP(filePath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      const outputPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      console.log(`Converting ${filePath} to WebP...`);
      try {
        execSync(`cwebp -q 80 "${filePath}" -o "${outputPath}"`);
        console.log(`Successfully converted ${file} to WebP`);
      } catch (error) {
        console.error(`Error converting ${file}:`, error.message);
      }
    }
  });
}

try {
  convertToWebP(imageDir);
  console.log('WebP conversion complete!');
} catch (error) {
  console.error('Error during WebP conversion:', error.message);
}