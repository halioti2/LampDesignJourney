import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the dist/public directory (where Vite builds to)
app.use(express.static(path.join(__dirname, 'dist/public')));

// Serve all routes with the main index.html for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Static server running at http://localhost:${PORT}`);
  console.log(`To view your site, press the "Open in a new tab" button in the Replit window`);
});