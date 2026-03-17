import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import '../App.css';

function About() {
  const [stats, setStats] = useState({ images: 0, cities: 0, views: 0 });
  const [activeTimeline, setActiveTimeline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        images: 50,
        cities: 20,
        views: 2500
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const timelineData = [
    { year: '2026', title: 'Project Launch', desc: 'Cityscape Gallery micro-project for SEM 6 CSS' },
    { year: 'Mar 17', title: '3x3 Grid', desc: 'Implemented responsive 3-column layout' },
    { year: 'Mar 17', title: 'Infinite Scroll', desc: 'Added dynamic loading with hover effects' },
    { year: 'Today', title: 'Production Ready', desc: 'Multi-page app with Home + Gallery + About' }
  ];

  return (
    <>
      <Navbar />
      <div className="about-hero">
        <div className="about-content">
          <h1 className="about-title">🏙️ About Cityscape Gallery</h1>
          <p className="about-subtitle">Modern React masterpiece built for SEM 6 CSS Micro Project</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stat-card">
          <div className="stat-number">{stats.images}+</div>
          <div className="stat-label">Cityscapes</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.cities}+</div>
          <div className="stat-label">Cities</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.views}+</div>
          <div className="stat-label">Views</div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="features-section">
        <h2 className="section-title">✨ Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📐</div>
            <h3>3x3 Grid Layout</h3>
            <p>Perfectly balanced responsive design adapting to all screens</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">♾️</div>
            <h3>Infinite Scroll</h3>
            <p>Seamlessly load 50+ cityscapes as you scroll</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Hover Animations</h3>
            <p>Smooth scale + overlay effects on every image</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Fully Responsive</h3>
            <p>Perfect on desktop, tablet, and mobile devices</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>React Router</h3>
            <p>Smooth navigation between Home, Gallery, About</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Optimized</h3>
            <p>Lazy loading + modern CSS Grid performance</p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="timeline-section">
        <h2 className="section-title">🚀 Development Timeline</h2>
        <div className="timeline">
          {timelineData.map((item, index) => (
            <div 
              key={index}
              className={`timeline-item ${activeTimeline === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveTimeline(index)}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Creator Section */}
     


<div className="team-section">
  <h2 className="section-title" style={{color: 'white'}}>👥 Our Team</h2>
  <div className="team-grid">
    {/* Atharva Shinde */}
    <div className="team-card">
      <div className="team-avatar">👨‍💻</div>
      <h3>Atharva Shinde</h3>
      <p>Lead Developer<br/>React + CSS Grid</p>
      <div className="team-tech">
        <span>React</span>
        <span>Design</span>
        <span>Router</span>
      </div>
    </div>
    
    {/* Siddhi Jitkar */}
    <div className="team-card">
      <div className="team-avatar">👩‍💻</div>
      <h3>Siddhi Jitkar</h3>
      <p>UI/UX Designer<br/>Animations + Styling</p>
      <div className="team-tech">
        <span>CSS Animations</span>
        <span>Responsive</span>
        <span>CSS Grid</span>
      </div>
    </div>
  </div>
</div>
    </>
  );
}

export default About;
