# Stefanos Palaiochoritis Portfolio

Welcome to my portfolio! This is a web application built to showcase my skills, projects, and experience as a web developer. The application is built using **Astro**, **Svelte**, and **Tailwind CSS**, with full support for localization (English and Greek).

---

## Features

- **Astro Framework**: Modern static site generation for lightning-fast performance.
- **Svelte Components**: Dynamic, reusable, and reactive components.
- **Tailwind CSS**: Utility-first CSS framework for responsive and clean designs.
- **Localization (i18n)**: Multi-language support with English (default) and Greek translations.
- **Responsive Design**: Fully responsive layout optimized for all devices.
- **Dynamic Content**: Projects and content are rendered dynamically based on the selected language.
- **SEO Optimized**: Includes metadata for improved search engine visibility.

---

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Armaroth/web-eleven-assignment.git
   ```

2. Navigate to the project directory:

   ```bash
   cd web-eleven-assignment
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and go to:
   ```
   http://localhost:4321/
   ```

---

## Localization (i18n)

This portfolio supports two languages:

- **English** (default)
- **Greek**

The translations are stored in `src/i18n/en.json` and `src/i18n/gr.json`. Astro's `Astro.currentLocale` is used to dynamically determine the user's selected language, and all pages and components fetch their content based on the locale.

### Switching Languages

## Users can switch between English and Greek using the language switcher in the header.

## Technologies Used

- **Astro**: For building a fast, modern static website.
- **Svelte**: For dynamic, reusable components.
- **Tailwind CSS**: For responsive and customizable styling.
- **i18n**: For localization and multi-language support.
- **Node.js**: For running the development environment.
