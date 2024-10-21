import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router
import './index.css';
import App from './App';
import YoutubeSearch from './YoutubeSearch'; // Import your YoutubeSearch component
import Career from './Career'; // Import your Career component
import Resume from './Resume'; // Import your Career component
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/youtube" element={<YoutubeSearch />} /> {/* Add this route */}
        <Route path="/career" element={<Career />} /> {/* Add this route */}
        <Route path="/resume" element={<Resume />} /> {/* Add this route */}
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
