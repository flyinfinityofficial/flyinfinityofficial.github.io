# Fly Infinity - Official Website

Welcome to the official repository for the Fly Infinity website. This project showcases our mobile applications and services, built with modern web technologies for high performance and visual impact.

## 🚀 Live Demo
Visit the live site: [https://flyinfinityofficial.github.io/](https://flyinfinityofficial.github.io/)

## ✨ Key Features
- **Modern Design**: Utilizes Glassmorphism, Bento Grid layouts, and Neon aesthetics (2025 Trends).
- **High Performance**: 
    - **100/100 Lighthouse Score** (Target) via semantic HTML and optimized assets.
    - **WebP Images**: All visuals converted to next-gen formats.
    - **Static CSS**: Tailwind CSS pre-built for zero runtime overhead.
- **Interactive**: Powered by **GSAP (GreenSock)** for smooth scroll animations and magnetic interactions.
- **Responsive**: Fully optimized for mobile, tablet, and desktop.

## 🛠 Tech Stack
- **HTML5**: Semantic structure.
- **Tailwind CSS**: Utility-first styling (v3).
- **JavaScript (ES6+)**: Logic and interactivity.
- **GSAP**: Advanced animations (ScrollTrigger).
- **Font Awesome**: Icons.

## 📦 Project Structure
```
├── assets/             # Optimized images (WebP)
├── src/
│   └── input.css       # Tailwind source CSS 
├── script.js           # Main JavaScript logic
├── style.css           # Compiled CSS (DO NOT EDIT DIRECTLY)
├── index.html          # Main entry point
├── package.json        # Dependencies and scripts
└── tailwind.config.js  # Tailwind configuration
```

## 🔧 Development

### Prerequisites
- Node.js installed.

### Setup
1. Clone the repository.
   ```bash
   git clone https://github.com/flyinfinityofficial/flyinfinityofficial.github.io.git
   ```
2. Install dependencies.
   ```bash
   npm install
   ```

### Build CSS
To compile the Tailwind CSS:
```bash
npm run build:css
```

### Watch Mode
To watch for changes during development:
```bash
npm run watch:css
```

## 🚀 Pre-Push Checklist
Before deploying or pushing to GitHub, always run these commands to ensure your site is up-to-date:

1.  **Build CSS**: Ensure your latest style changes are compiled.
    ```bash
    npm run build:css
    ```
2.  **Optimize Images**: If you added new images to `assets/`.
    ```bash
    python optimize_images.py
    ```
3.  **Verify**: Open `index.html` locally to check everything looks correct.

## 🚢 Deployment
This project is configured for **GitHub Pages**.
1. Ensure `style.css` is built and included in your commit.
2. Push changes to the `main` branch.
   ```bash
   git push origin main
   ```
3. GitHub Pages will serve the updated content.

## 📄 License
© 2025 Fly Infinity. All Rights Reserved.
