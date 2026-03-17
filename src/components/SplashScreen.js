import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const SplashScreen = () => {
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
      setTimeout(() => navigate('/home'), 2000);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <div className="logo">📸</div>
        <h1 className="splash-title">Image Gallery</h1>
        <p className="splash-subtitle">Loading beautiful moments...</p>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
