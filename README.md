# Ethan Davey Portfolio Site

This is a portfolio website for lamp designer Ethan Davey showcasing his design journey, creative process, and lamp designs.

## Development

To run the development server:

```bash
npm run dev
```

The site will be available at http://localhost:3000.

## Building for Production

To build the site for production:

```bash
node build-static.js
```

This will:
1. Generate all the optimized files in the `dist/public` directory
2. Display instructions for deployment

## Deployment Options

### Option 1: Static Hosting (Recommended)

Copy the contents of the `dist/public` folder to any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- Amazon S3
- Any web hosting with static file serving

Make sure to configure your hosting provider to redirect all routes to `index.html` for proper SPA functionality.

### Option 2: Self-Hosting

If you want to self-host the website:

1. Copy the entire project to your server
2. Run:
```bash
node static-serve.js
```
3. Configure your web server (Apache, Nginx, etc.) to proxy requests to port 3000 or change the PORT in static-serve.js

## Project Structure

- `client/` - Frontend React application
- `dist/public/` - Built static files for deployment
- `static-serve.js` - Static server for hosting the built files
- `build-static.js` - Script to build the static files