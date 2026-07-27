# Portfolio Website Frontend

This frontend project is a modern React + Vite portfolio website for a data analyst and BI engineer. It showcases professional experience through a polished single-page experience with sections for skills, featured projects, certifications, and contact details.

## Overview

The site is designed as a dark, high-contrast personal brand experience with a data-centric aesthetic. It highlights:

- a hero section with animated KPI-style metrics
- capability cards for data engineering, BI, Python analytics, and communications
- featured project cards for analytics and dashboard work
- a certifications gallery with modal previews
- resume and social links for easy contact

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS via @tailwindcss/vite
- ESLint for code quality

## Project Structure

```text
src/
├── assets/                # Images, PDFs, and certificate assets
├── components/            # Main UI sections: Hero, Nav, Skills, Projects, Contact, Footer, Certifications
├── hooks/                 # Custom hooks such as scroll-based animations
├── pages/                 # Page-level components (currently includes a pizza_sales_dashboard placeholder)
├── App.jsx                # Main app layout and section composition
├── main.jsx               # Application entry point
└── index.css              # Global styles and Tailwind theme setup
```

## Key Features

- Responsive, mobile-friendly layout
- Smooth scrolling navigation
- Animated section reveals on scroll
- Interactive certificate preview modal
- Project cards linking to GitHub repositories
- Resume PDF and contact links

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js 18+ or newer
- npm

### Install Dependencies

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal (usually http://localhost:5173).

### Build for Production

```bash
npm run build
```

### Lint the Project

```bash
npm run lint
```

## Main Sections

### Hero

The landing section introduces the portfolio owner as a data analyst and BI engineer, with a visually styled analytics panel and skill progress indicators.

### Skills

Showcases major capabilities such as data engineering, business intelligence, Python analytics, statistics, and stakeholder communication.

### Projects

Highlights portfolio projects including:

- Pizza Sales Dashboard
- Insurance Retention Prediction and Visualization
- Data Analyst Jobs Analysis

### Certifications

Displays course and certification accomplishments with a modal-based preview experience for image and PDF credentials.

### Contact

Provides direct contact options, including email, LinkedIn, GitHub, Kaggle, and a downloadable resume.

## Customization

To update the content:

- Edit the relevant component in the src/components folder
- Replace images/PDFs in src/assets
- Update text, links, and section ordering in App.jsx

## Notes

- The app is currently a single-page portfolio experience.
- The dashboard page under src/pages/pizza_sales_dashboard.jsx exists but is currently empty and can be expanded later.
- The site uses a custom dark theme and several utility classes defined in src/index.css.

## License

No license is currently specified in the project configuration.
