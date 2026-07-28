# Site-Sherpa : Company Landing Page

A fully responsive, modern company landing page built with high-performance web technologies. This project features smooth animations, a clean component-based architecture, and is optimized for both speed and user experience.

## 🚀 Tech Stack

Based on the `package.json`, this project leverages a highly modern React ecosystem:
* **Frontend Framework:** React 19
* **Build Tool:** Vite (for lightning-fast HMR and optimized builds)
* **Styling:** Tailwind CSS (via `@tailwindcss/vite`)
* **Animations:** GSAP (GreenSock Animation Platform) & Lottie-React for SVG animations
* **Code Quality:** ESLint

## ✨ Key Features

* **Fully Responsive:** Beautifully adapts to all screen sizes (mobile, tablet, desktop).
* **Smooth Animations:** Integrated GSAP and Lottie for complex, highly performant UI animations.
* **Modular Architecture:** Clean, well-separated components (`Hero`, `FAQ`, `Testimonials`, `CTA`, etc.) for easy maintenance and readability.
* **Fast Performance:** Built with Vite for rapid development and highly optimized production output.

## 💻 Installation & Local Setup

Follow these steps to run the project on your local machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Tusar78/Site-Sherpa.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd Site-Sherpa
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
*The site will typically be available at `http://localhost:5173/`.*

## 📁 Folder Structure Overview

The workspace is cleanly organized to keep UI components and assets manageable:

```text
src/
├── assets/            # Fonts, images, and other static assets
├── components/        # Reusable UI sections
│   ├── Banner/
│   ├── Hero/
│   ├── FAQ/
│   ├── Testimonials/
│   ├── Solution/
│   └── ... (other layout sections)
├── App.jsx            # Main application root structure
├── main.jsx           # React DOM entry point
└── index.css          # Global stylesheet (Tailwind imports)
```

## 🛠️ Available Commands

In the project directory, you can run the following scripts:

* `npm run dev`: Starts the Vite development server.
* `npm run build`: Bundles the app for production into the `dist` folder.
* `npm run preview`: Previews the production build locally before deploying.
* `npm run lint`: Analyzes the code to catch potential errors using ESLint.

## 🤝 Handover & Maintenance

If you are a new developer taking over this project:
1. Ensure you have Node.js installed.
2. The core styling is handled via **Tailwind CSS**. Check `index.css` for any global overrides.
3. Complex animations are handled via **GSAP** (`@gsap/react`). Animation logic is kept inside the respective component folders.