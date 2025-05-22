import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import OccasionSelection from './pages/OccasionSelection.jsx';
import OccasionQuestions from './pages/OccasionQuestions.jsx';
import Result from './pages/Result.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/occasion" element={<OccasionSelection />} />
        <Route path="/questions/:occasion" element={<OccasionQuestions />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  </React.StrictMode>
);