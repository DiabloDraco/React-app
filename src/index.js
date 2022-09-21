import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next';
import { lang } from './lang/lang.js'

i18n
.use(initReactI18next)
.init({
  resources: lang,
  lng: "uz",
  interpolation: {
    escapeValue:false 
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
