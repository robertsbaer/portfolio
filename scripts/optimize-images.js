import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Change to look in the correct directory where your images are stored
const imageDir = path.join(__dirname, '../src/assests'); // Note: "assests" is the correct folder name based on your file structure

// Create directory if it doesn't exist
function ensureDirectoryExists(directory) {
  if (!fs.existsSync(directory)) {
    console.log(`Creating directory: ${directory}`);
    fs.mkdirSync(directory, { recursive: true });
    return false;
  }
  return true;
}

function optimizeImages(directory) {
  // Ensure the directory exists before trying to read it
  if (!ensureDirectoryExists(directory)) {
    console.log(`No files to optimize in newly created directory: ${directory}`);
    return;
  }
  
  const files = fs.readdirSync(directory);
  
  if (files.length === 0) {
    console.log(`No files found in directory: ${directory}`);
    return;
  }
  
  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      optimizeImages(filePath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      console.log(`Optimizing ${filePath}...`);
      try {
        // Resize and optimize images
        execSync(`sharp --input ${filePath} --output ${filePath} --resize 1200 --quality 80`);
        console.log(`Successfully optimized ${file}`);
      } catch (error) {
        console.error(`Error optimizing ${file}:`, error.message);
      }
    }
  });
}

try {
  optimizeImages(imageDir);
  console.log('Image optimization complete!');
} catch (error) {
  console.error('Error during image optimization:', error.message);
}