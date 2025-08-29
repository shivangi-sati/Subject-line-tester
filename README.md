# Email Subject Line Tester

A React.js mini-project to test email subject lines for length, spam likelihood, and inbox preview. Built as part of the Anslation Front End Developer Internship.

## About Spam APIs

The project simulates spam scoring because most free spam check APIs have CORS restrictions or authentication requirements that prevent direct frontend calls. Using a simulated score ensures the app works fully while demonstrating state management, dynamic updates, and result display.

## Features

**Subject Input**: Real-time length feedback with warnings.  
**Spam Score**: Simulated spam analysis (0–5 score). Can be replaced with a real API.  
**Email Preview**: Dynamic preview of subject in inbox style.  
**Animations**: Smooth transitions with Framer Motion.

## 🛠 Tech Stack & Packages

- React.js
- Tailwind CSS
- Framer Motion
- Context API for global state  
  **NPM Packages Installed**:

```bash
npm install react react-dom framer-motion tailwindcss
```
