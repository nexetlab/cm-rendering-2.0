// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '/Users/tanzin/Desktop/cm_render/src/styles/animation.css';         // ✅ CSS import
import '/Users/tanzin/Desktop/cm_render/src/styles/main.css';  

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
