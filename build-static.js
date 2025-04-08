import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('Building static site...');

try {
  // Run the build command
  console.log('Running npm run build...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('Build completed successfully!');
  console.log('\nTo serve the static site:');
  console.log('1. Run: node static-serve.js');
  console.log('2. The site will be available at the Replit URL');
  
  if (process.env.REPL_SLUG && process.env.REPL_OWNER) {
    console.log(`   https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`);
  } else {
    console.log('   http://localhost:3000 (when running locally)');
  }
  
  console.log('\nTo deploy to a hosting provider:');
  console.log('1. Copy the contents of the "dist/public" folder to your hosting provider');
  console.log('   - All HTML, CSS, JS and assets are included in this folder');
  console.log('2. Ensure your hosting provider routes all paths to index.html for SPA functionality');
  console.log('\nSuggested hosting options:');
  console.log('- Netlify (drag and drop the dist/public folder)');
  console.log('- Vercel (connect to your GitHub repository)');
  console.log('- GitHub Pages (with proper SPA configuration)');
  
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}