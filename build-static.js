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
  
  // Copy GitHub Pages specific files
  console.log('\nPreparing additional files for GitHub Pages compatibility...');
  
  try {
    // Ensure dist/public directory exists
    if (!fs.existsSync(path.join(__dirname, 'dist', 'public'))) {
      console.log('Creating dist/public directory...');
      fs.mkdirSync(path.join(__dirname, 'dist', 'public'), { recursive: true });
    }
    
    // Copy 404.html to dist/public
    if (fs.existsSync(path.join(__dirname, '404.html'))) {
      fs.copyFileSync(
        path.join(__dirname, '404.html'), 
        path.join(__dirname, 'dist', 'public', '404.html')
      );
      console.log('✓ Copied 404.html to dist/public');
    } else {
      console.warn('⚠ Warning: 404.html not found in project root');
    }
    
    // Create .nojekyll in dist/public
    fs.writeFileSync(
      path.join(__dirname, 'dist', 'public', '.nojekyll'), 
      ''
    );
    console.log('✓ Created .nojekyll file in dist/public');
  } catch (err) {
    console.error('Error creating GitHub Pages files:', err.message);
    // Continue with the build, don't fail the whole process
  }
  
  console.log('\nBuild completed successfully!');
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
  console.log('   - GitHub Pages specific files (404.html and .nojekyll) are included');
  console.log('2. Ensure your hosting provider routes all paths to index.html for SPA functionality');
  
  console.log('\nSuggested hosting options:');
  console.log('- Netlify (drag and drop the dist/public folder)');
  console.log('- Vercel (connect to your GitHub repository)');
  console.log('- GitHub Pages:');
  console.log('  * User site: Create repo named username.github.io and upload dist/public contents to main branch');
  console.log('  * Project site: Enable GitHub Pages in repository settings (use gh-pages branch)');
  
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}