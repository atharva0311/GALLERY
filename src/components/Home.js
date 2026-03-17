import React from 'react';
import Navbar from './Navbar';
import '../App.css';

const featuredCities = [
  { title: "Manhattan Skyline", desc: "Golden hour Empire State glow", img: "https://picsum.photos/800/500?random=300" },
  { title: "Tokyo Neon", desc: "Shibuya crossing rush hour", img: "https://picsum.photos/800/500?random=301" },
  { title: "Dubai Burj", desc: "Khalifa piercing storm clouds", img: "https://picsum.photos/800/500?random=302" }
];

function Home() {
  return (
    <>
      <Navbar />
      <div className="home-hero">
        <div className="hero-content">
          <h1 className="hero-title">🏙️ Discover World Cityscapes</h1>
          <p className="hero-subtitle">Explore breathtaking urban skylines from around the globe</p>
          <a href="/gallery" className="cta-button">Enter Gallery →</a>
        </div>
      </div>

      <div className="featured-section">
        <h2 className="section-title">Featured Cities</h2>
        <div className="featured-grid">
          {featuredCities.map((city, index) => (
            <div key={index} className="featured-card">
              <img src={city.img} alt={city.title} />
              <div className="card-content">
                <h3>{city.title}</h3>
                <p>{city.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
