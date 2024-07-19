import React from 'react';
import ReactDOM from 'react-dom';
import ContactApp from './components/ContactApp';
import './style.css'; // Include your CSS file here

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContactApp />
  </React.StrictMode>
);

