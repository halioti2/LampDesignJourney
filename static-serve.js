import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 5000; // Use the same port as the development server

// Check if the dist/public directory exists
const publicDir = path.join(__dirname, 'dist/public');
if (!fs.existsSync(publicDir)) {
  console.error('Error: dist/public directory does not exist!');
  console.error('Please run "node build-static.js" first to build the static site.');
  process.exit(1);
}

// Serve static files from the dist/public directory (where Vite builds to)
app.use(express.static(publicDir));

// Serve all routes with the main index.html for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

// Start server with better URL display
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Static server running at http://0.0.0.0:${PORT}`);
  console.log(`To view your site, open the URL in the Replit webview`);
  if (process.env.REPL_SLUG && process.env.REPL_OWNER) {
    console.log(`or visit: https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`);
  }
});