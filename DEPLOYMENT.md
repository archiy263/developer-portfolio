# Deployment Guide

This project is optimized for deployment on Vercel, Netlify, and GitHub Pages.

## Deploying to Vercel (Recommended)
Vercel provides native support for Vite React projects.
1. Push your code to a GitHub repository.
2. Log in to Vercel and click "Add New Project".
3. Import your GitHub repository.
4. Vercel will automatically detect Vite. The default build command (`npm run build`) and output directory (`dist`) will be pre-filled.
5. Click "Deploy".

## Deploying to Netlify
1. Push your code to a GitHub repository.
2. Log in to Netlify and click "Add new site" -> "Import an existing project".
3. Connect your GitHub account and select the repository.
4. Set Build Command to `npm run build` and Publish Directory to `dist`.
5. Click "Deploy site".

## Deploying to GitHub Pages
1. In `vite.config.ts`, add the base path if your repository is not the root:
   ```ts
   export default defineConfig({
     plugins: [react()],
     base: '/repository-name/', // Add this if deploying to user.github.io/repository-name/
   })
   ```
2. Run `npm run build`.
3. Push the `dist` folder to the `gh-pages` branch, or use a GitHub Action like `peaceiris/actions-gh-pages` to automate the deployment.
