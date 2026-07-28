# Site-Sherpa : Complete Project & Client Handover Guide

The Site-Sherpa application is a modern React-based Single Page Application (SPA). This document provides a comprehensive guide for managing, updating, and extending the application. It is designed for both technical and non-technical users, offering clear instructions and best practices for maintaining the website.

## 🚀 1. Project Overview & Tech Stack

This project leverages a highly modern React ecosystem built with the following key technologies to ensure a highly performant, maintainable, and scalable web application:
* **React:** A JavaScript library for building user interfaces.
* **Vite:** A fast build tool that provides a lightning-fast development experience.
* **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
* **Animations:** GSAP (GreenSock Animation Platform) & Lottie-React for complex, highly performant UI animations.

## ✨ 2. Key Features

* **Fully Responsive:** Beautifully adapts to all screen sizes (mobile, tablet, desktop).
* **Smooth Animations:** Integrated GSAP and Lottie for fluid user experiences.
* **Modular Architecture:** Clean, well-separated components for easy maintenance and readability.
* **Fast Performance:** Built with Vite for rapid development and highly optimized production output.

## 📁 3. Project Structure

The project follows a standard React application structure, organized for clarity and maintainability. Below is an overview of the most important directories and files:

```text
Site-Sherpa/
├── public/                 # Static assets (e.g., favicon, index.html)
├── src/                    # Source code of the application
│   ├── assets/             # Images, icons, and other media files
│   │   └── images/         # Organized by section (e.g., Hero, Solution)
│   ├── components/         # Reusable UI components
│   │   ├── Banner/         
│   │   ├── Header/         # Navigation bar
│   │   └── Footer/         # Website footer
│   ├── App.jsx             # Main application component, orchestrates other components
│   ├── index.css           # Global CSS styles (primarily Tailwind CSS imports)
│   └── main.jsx            # Entry point of the React application
├── package.json            # Project metadata and dependencies
└── vite.config.js          # Vite build configuration
```

**Key Directories Explained:**
* **`src/components`:** This directory is the heart of the application’s UI. Each subfolder typically represents a distinct, reusable UI component. This modular approach makes it easy to locate and modify specific parts of the UI without affecting others.
* **`src/assets`:** Contains all static resources like images, icons, and other media. Organizing assets by their respective sections helps in quickly finding and replacing visual content.
* **`App.jsx`:** This file acts as the main layout and orchestrator. It imports and renders all the major sections/components of the website in their respective order.
* **`package.json`:** Lists all project dependencies and defines scripts for development, building, and previewing the application.

## 💻 4. Installation & Local Setup

Ensure you have Node.js and npm (or Yarn) installed on your system. You can download them from nodejs.org.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Tusar78/Site-Sherpa.git
   ```
2. **Install dependencies:** Navigate to the Site-Sherpa directory in your terminal and install the project dependencies:
   ```bash
   npm install
   ```
3. **Development Server:** To run the application in development mode with hot-reloading and developer tools:
   ```bash
   npm run dev
   ```
   *This will typically start the application on `http://localhost:5173`.*

## 📝 5. Modifying Website Content (Client Guide)

Modifying the website’s content involves editing the relevant `.jsx` files within the `src/components` directory and updating assets in `src/assets`.

### 5.1. Modifying Text
Text content is typically embedded directly within the JSX code of components. 
1. **Identify the Component:** Determine which section of the website contains the text you wish to change (e.g., the main heading is likely in `Hero.jsx`).
2. **Locate the File:** Navigate to the corresponding `.jsx` file in `src/components/`.
3. **Edit the Text:** Open the file, locate the text string, and simply change the text within the HTML tags (e.g., `<h1>` or `<p>`).

### 5.2. Modifying Images
Images are stored in the `src/assets/images` directory.
1. **Replace the Image File:** Place your new image file into the appropriate subfolder. Ensure the new image has the same name and extension as the one you are replacing, or update the import path.
2. **Update Component Reference:** If you changed the image file name or path, you’ll need to update the import statement and the `src` attribute in the relevant `.jsx` component file.

### 5.3. Modifying Buttons and Links
Buttons and links are often implemented as reusable components (e.g., `PrimaryBtn`).
1. **Locate the Component:** Find the `.jsx` file where the button or link is used.
2. **Adjust Props:** Components like `PrimaryBtn` accept props to customize their behavior. Change the `href` value to update the destination URL, and the `text` value to update the button’s visible text.

## 🌍 6. Deployment & Hosting

To deploy the application, you need to host the contents of the `dist/` folder on a web server or a static site hosting service. No server-side processing is required for this SPA.

### Building for Production
To create an optimized, production-ready build of your application:
```bash
npm run build
```
This command will generate a `dist/` folder in your project root, containing all the static files required to run your application. These files are highly optimized for performance.

### Previewing the Production Build
To test your production build locally before deploying:
```bash
npm run preview
```
This command serves the contents of the `dist/` folder, allowing you to verify that everything works as expected in a production-like environment.

### Hosting Platforms
* **Vercel / Netlify (Recommended):** Import your GitHub repository, set the build command to `npm run build`, and the output directory to `dist`.
* **Personal Domain / cPanel:** Run `npm run build` locally, then upload all the contents **inside** the generated `dist` folder directly to your server's `public_html` directory via File Manager or FTP.

## 🏗️ 7. Developing Future Pages and Reusing Components

### 7.1. Reusing Existing Components
The project is built with a component-based architecture, which promotes reusability. Before creating a new component, check if an existing one can be adapted. Look for components in `src/components/` that handle common UI elements like headers, footers, buttons, cards, or sections. Each component is self-contained and can be imported and used in any other component or page.

### 7.2. Developing New Pages
To add a new page or section to the website:
1. **Create a New Component File:** In `src/components/`, create a new folder for your page and add a `.jsx` file.
2. **Develop the Page Content:** Write the JSX for your new page, utilizing existing components where possible.
3. **Integrate into App.jsx:** If it’s a top-level page, import your new component into `App.jsx` and render it.

### 7.3. Styling with Tailwind CSS
Tailwind CSS is used for styling. Instead of writing custom CSS classes for every element, you apply utility classes directly in your JSX. This approach allows for rapid UI development and ensures design consistency. 

## ⭐ 8. Best Practices for Future Changes

To ensure the long-term health and maintainability of the Site-Sherpa application, please adhere to the following best practices:
* **Component Reusability:** Always prioritize reusing existing components. If a component doesn’t exactly fit, consider if it can be made more generic to serve multiple purposes.
* **Modular Development:** Keep components small, focused, and independent. Each component should ideally do one thing well.
* **Clear Naming Conventions:** Use descriptive names for files, folders, components, and variables. This improves code readability and makes it easier for new developers to understand the project.
* **Version Control:** Use a version control system (like Git) to track changes, collaborate with others, and revert to previous versions if necessary. Commit changes frequently with clear, concise messages.
* **Testing:** Implement tests for critical components and functionalities to prevent regressions and ensure stability.
* **Documentation:** Document any new components, complex logic, or significant changes within the code or in separate documentation files. This helps future developers understand your work.
* **Tailwind CSS Usage:** Stick to Tailwind’s utility-first approach. Avoid writing custom CSS unless absolutely necessary, and if you do, ensure it’s well-organized and documented.

## ⚡ 9. Essential npm Commands Summary

| Command | Description |
|---|---|
| `npm install` | Installs all project dependencies. Run this after cloning the repository. |
| `npm run dev` | Starts the development server with hot-reloading for local development. |
| `npm run build` | Creates an optimized production build in the `dist/` folder. |
| `npm run preview` | Serves the production build locally for testing before deployment. |
| `npm run lint` | Runs ESLint to check for code quality and style issues. |