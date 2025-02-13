// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


// Import your components/pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import Check from './pages/Check';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Menu */}
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">Home</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="pages" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="Menu">Menu</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="Check">Check</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Check" element={<Check />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;