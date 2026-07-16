# Harsa Vardan A K — Portfolio

A professional developer portfolio built with React.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / Navbar.css
│   │   ├── Hero.jsx   / Hero.css
│   │   ├── About.jsx  / About.css
│   │   ├── Experience.jsx / Experience.css
│   │   ├── Projects.jsx   / Projects.css
│   │   ├── Skills.jsx     / Skills.css
│   │   ├── Education.jsx  / Education.css
│   │   ├── Contact.jsx    / Contact.css
│   │   └── Footer.jsx     / Footer.css
│   ├── data/
│   │   └── resume.js       ← Edit all your info here
│   ├── App.jsx / App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## ✏️ Customization

All content lives in **`src/data/resume.js`** — edit your name, experience, projects, skills, and certifications there. No other files need to change for content updates.

## 🎨 Design

- **Theme**: Dark navy / deep blue professional
- **Fonts**: DM Serif Display + DM Sans (Google Fonts)
- **Features**: Animated particle hero, filterable projects, scroll-aware navbar, responsive layout
- **Sections**: Hero → About → Experience → Projects → Skills → Education → Contact

## 🌐 Deploy

### Netlify (recommended)
```bash
npm run build
# Drag the /build folder into Netlify Drop
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json: "homepage": "https://yourusername.github.io/portfolio"
# Add scripts: "predeploy": "npm run build", "deploy": "gh-pages -d build"
npm run deploy
```

### Vercel
```bash
npm install -g vercel
vercel
```
