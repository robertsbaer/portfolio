import { PurgeCSS } from 'purgecss';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function purgeUnusedCSS() {
  const distDir = path.join(__dirname, '../dist');
  const cssFiles = fs.readdirSync(path.join(distDir, 'assets'))
    .filter(file => file.endsWith('.css'))
    .map(file => path.join(distDir, 'assets', file));
  
  const htmlFiles = [path.join(distDir, 'index.html')];
  const jsFiles = fs.readdirSync(path.join(distDir, 'assets'))
    .filter(file => file.endsWith('.js'))
    .map(file => path.join(distDir, 'assets', file));
  
  const result = await new PurgeCSS().purge({
    content: [...htmlFiles, ...jsFiles],
    css: cssFiles,
    safelist: {
      standard: [/^animate-/, /^motion-/, /^grid-/, /^noise-/],
      deep: [/framer-motion/]
    }
  });
  
  result.forEach(({ css, file }) => {
    fs.writeFileSync(file, css);
    console.log(`Purged unused CSS from ${file}`);
  });
}

purgeUnusedCSS().catch(console.error);