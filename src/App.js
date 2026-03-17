import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import Home from './components/Home';      // ← NEW
import Gallery from './components/Gallery';
import About from './components/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/home" element={<Home />} />     {/* ← NEW HOME */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
