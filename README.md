# Ethan Davey - Lamp Designer Portfolio

This is a portfolio website for lamp designer Ethan Davey, showcasing his creative journey, design exploration, and lamp creations under the studio name "Kaizen Glow".

![Ethan Davey Portfolio](./attached_assets/IMG_8131.jpeg)

## Features

- **Chronological Design Journey**: Visual narrative of the designer's progression
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Interactive Sections**: Engaging presentation of design process and materials
- **Image Lightbox**: Easy viewing of high-resolution design images
- **Contact Information**: Direct ways to connect with the designer

## Development

To run the development server:

```bash
npm run dev
```

The site will be available at http://localhost:3000 or via the Replit URL if using Replit.

## Building for Production

To build the static site for production:

```bash
node build-static.js
```

This will:
1. Generate all optimized assets in the `dist/public` directory
2. Show detailed deployment instructions
3. Create a production-ready version of the site

To test the production build locally:

```bash
node static-serve.js
```

## Deployment Options

### Option 1: Netlify (Recommended)

1. Create a Netlify account at [netlify.com](https://www.netlify.com/)
2. After building the site, drag and drop the `dist/public` folder into the Netlify dashboard
3. Configure redirect rules:
   - Create a `_redirects` file in the `dist/public` folder with: `/* /index.html 200`
   - Or use Netlify's GUI to add this redirect rule

### Option 2: Vercel

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Set the build command to `node build-static.js`
4. Set the output directory to `dist/public`
5. Configure rewrites to direct all paths to `index.html`

### Option 3: GitHub Pages

1. Push the `dist/public` contents to a GitHub repository
2. Enable GitHub Pages in the repository settings
3. Add a `.nojekyll` file to the repository root
4. If using a custom domain, configure DNS settings accordingly
5. Create a `404.html` that redirects to index.html for SPA routing

### Option 4: Self-Hosting

For self-hosting on your own server:

1. Transfer the entire project to your server
2. Install Node.js if not already present
3. Run either:
   ```bash
   # To serve the pre-built files
   node static-serve.js
   
   # Or to build and then serve
   node build-static.js && node static-serve.js
   ```
4. For production use, consider using PM2 to keep the server running:
   ```bash
   npm install -g pm2
   pm2 start static-serve.js --name "ethan-portfolio"
   ```
5. Set up a reverse proxy with Nginx or Apache to serve on port 80/443

## Project Structure

- `client/` - Frontend React application
  - `src/` - Source code
    - `components/` - UI components including sections
    - `assets/` - Images and other static assets
    - `pages/` - Page components
- `server/` - Backend server for development
- `dist/public/` - Production-ready static files
- `static-serve.js` - Static file server
- `build-static.js` - Build script for production

## Contact

For questions about the portfolio site or to reach Ethan Davey:
- Email: kaizen.glow.lamp@gmail.com
- Instagram: @kaizen.glow
- Studio: Kaizen Glow, Brooklyn, NY