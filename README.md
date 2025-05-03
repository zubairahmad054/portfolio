<<<<<<< HEAD
# portfolio-site
this is my professional portfolio site.
=======
# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and TailwindCSS. Features include interactive data visualizations, smooth animations, and theme customization.

## Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Tech Stack

- React 19.0.0
- TypeScript 4.9.5
- TailwindCSS 3.3.5
- Framer Motion 12.5.0
- D3.js 7.9.0
- Three.js 0.174.0
- React Three Fiber & Drei

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create required configuration files:

   ### postcss.config.js
   ```javascript
   module.exports = {
     plugins: {
       tailwindcss: {},
       autoprefixer: {},
     },
   }
   ```

   ### tailwind.config.js
   ```javascript
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: [
       "./src/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
       extend: {
         colors: {
           primary: "#0A192F",
           secondary: "#64FFDA",
           neutral: {
             light: "#CCD6F6",
             DEFAULT: "#8892B0",
           }
         },
         fontFamily: {
           sans: ['Inter', 'system-ui', 'sans-serif'],
           heading: ['Poppins', 'sans-serif'],
           mono: ['JetBrains Mono', 'monospace'],
         }
       },
     },
     plugins: [],
   }
   ```

4. Font Requirements:
   The project uses the following Google Fonts:
   - Poppins (400, 500, 600, 700)
   - Inter (400, 500, 600, 700)
   - JetBrains Mono (400, 500)

   These are automatically loaded via the CSS import in index.css

## Available Scripts

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm test`

Launches the test runner in the interactive watch mode.

## Project Structure

```
portfolio-site/
├── src/
│   ├── assets/          # Static assets
│   ├── components/      # Reusable React components
│   ├── hooks/          # Custom React hooks
│   ├── layouts/        # Layout components
│   ├── pages/          # Page components
│   └── utils/          # Utility functions
```

## Features

- Responsive design
- Interactive data visualizations using D3.js
- Smooth animations with Framer Motion
- Theme customization
- 3D elements with Three.js
- TypeScript for type safety
- TailwindCSS for styling
- Lazy loading for optimal performance
- Custom hooks for scroll and intersection observers

## Browser Support

The website supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimization

The project includes several optimizations:
- Code splitting with React.lazy()
- Image optimization
- Font optimization with preloading
- Intersection Observer for lazy loading
- Tailwind CSS purging for production builds

## Known Issues

If you encounter the Tailwind CSS class issue with opacity modifiers, ensure you have the latest configuration files and restart the development server.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
>>>>>>> b84750b4 (initial commit)
"# portfolio" 
