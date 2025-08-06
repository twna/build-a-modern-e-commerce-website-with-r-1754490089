import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import NotFoundPage from './NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
{
  "checklist": [
    {
      "step": "Install React Router",
      "completed": true
    },
    {
      "step": "Import BrowserRouter, Routes, and Route from react-router-dom",
      "completed": true
    },
    {
      "step": "Wrap your application with BrowserRouter",
      "completed": true
    },
    {
      "step": "Define routes using Routes and Route",
      "completed": true
    },
    {
      "step": "Create components for each route",
      "completed": true
    },
    {
      "step": "Handle not found routes with a catch-all route",
      "completed": true
    }
  ]
}