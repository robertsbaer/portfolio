import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Correct the path to match your actual assets folder name
const imageDir = path.join(__dirname, '../src/assests');

function optimizeImages(directory) {
  if (!fs.existsSync(directory)) {
    console.log(`Directory does not exist: ${directory}`);
    return;
  }

  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      optimizeImages(filePath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      console.log(`Optimizing ${filePath}...`);
      try {
        // Use sharp CLI or another image optimization tool
        // This is a placeholder - you may need to install sharp-cli or use another tool
        execSync(`npx sharp-cli --input ${filePath} --output ${filePath} --resize 1200 --quality 80`);
        console.log(`Successfully optimized ${file}`);
      } catch (error) {
        console.error(`Error optimizing ${file}:`, error.message);
      }
    }
  });
}

optimizeImages(imageDir);
console.log('Image optimization complete!');