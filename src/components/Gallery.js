import React, { useState, useEffect, useCallback ,useRef } from 'react';
import Navbar from './Navbar';
import '../App.css';

const cityscapeDescriptions = [
  "Manhattan skyline at golden hour with Empire State Building glowing against pink sunset sky.",
  "Tokyo's neon-lit Shibuya crossing captured during peak rush hour with thousands of pedestrians.",
  "Dubai's Burj Khalifa piercing through dramatic storm clouds at dusk.",
  "Paris Eiffel Tower illuminated at night with perfect reflection in Seine River.",
  "Hong Kong's Victoria Harbour with Symphony of Lights laser show in full display.",
  "Singapore Marina Bay Sands infinity pool view with Supertree Grove lighting.",
  "New York Brooklyn Bridge pedestrian path with Manhattan skyline backdrop.",
  "London Tower Bridge opening for tall ship with Thames River reflections.",
  "Sydney Opera House sails catching sunset light across Sydney Harbour.",
  "Shanghai Pudong skyline with Oriental Pearl Tower dominating futuristic cityscape.",
  "Times Square billboard jungle at midnight with rain-slicked streets reflecting neon.",
  "Rio de Janeiro Christ the Redeemer overlooking Copacabana Beach at sunrise.",
  "Barcelona Sagrada Familia spires reaching toward stormy Mediterranean sky.",
  "Moscow Red Square with Saint Basil's Cathedral colorful domes under fresh snow.",
  "Cape Town Table Mountain cable car ascending through morning mist.",
  "Istanbul Hagia Sophia domes silhouetted against Bosphorus sunset.",
  "Mumbai Gateway of India with Arabian Sea waves crashing during monsoon.",
  "Toronto CN Tower piercing through dense fog over Lake Ontario.",
  "Seattle Space Needle surrounded by autumn foliage in golden hour light.",
  "Las Vegas Strip at night with Bellagio fountains synchronized to music.",
  "Amsterdam canals reflecting historic gabled houses during blue hour.",
  "Venice gondolas gliding through narrow canals at dawn with morning mist.",
  "San Francisco Golden Gate Bridge through heavy fog with Alcatraz in distance.",
  "Chicago skyline from Millennium Park with Cloud Gate bean reflection.",
  "Bangkok elevated BTS Skytrain cutting through chaotic street markets.",
  "Berlin Brandenburg Gate illuminated with Trabi cars in foreground.",
  "Los Angeles Hollywood sign above Griffith Observatory at twilight.",
  "Miami South Beach art deco buildings glowing neon pink at night.",
  "Vancouver Stanley Park seawall with downtown towers across Coal Harbour.",
  "Edinburgh Royal Mile cobblestones leading to Edinburgh Castle at dusk.",
  "Prague Charles Bridge statues silhouetted against Vltava River sunset.",
  "Budapest Parliament Building perfect reflection in Danube River at night.",
  "Vienna Stephansdom Gothic spires piercing through morning fog.",
  "Stockholm Gamla Stan cobblestone streets with colorful 17th century buildings.",
  "Oslo Opera House angular marble roof leading to fjord waterfront.",
  "Helsinki Cathedral green domes dominating Baltic Sea harbor skyline.",
  "Copenhagen Nyhavn colorful 17th century harbor bathed in sunset.",
  "Lisbon 25 de Abril Bridge golden gate twin spanning Tagus River.",
  "Madrid Gran Via illuminated with period architecture and modern billboards.",
  "Rome Colosseum arches lit dramatically against full moon sky.",
  "Athens Acropolis illuminated above modern city with Temple of Zeus ruins.",
  "Jerusalem Old City walls glowing golden at dawn call to prayer.",
  "Cairo pyramids silhouetted against desert sunset with camel silhouettes.",
  "Marrakech Jemaa el-Fnaa square chaos at dusk with minaret backdrop.",
  "Dubai Palm Jumeirah aerial view with Atlantis hotel centerpiece.",
  "Doha Pearl-Qatar artificial island with Islamic architecture skyline.",
  "Abu Dhabi Louvre Abu Dhabi dome floating above desert waterfront.",
  "Riyadh Kingdom Centre twin towers with skybridge spanning sunset.",
  "Tel Aviv Bauhaus white architecture along Mediterranean promenade.",
  "Beirut Corniche waterfront with Pigeon Rocks against sunset.",
  "Kyoto Gion district lanterns illuminating narrow geisha streets.",
  "Osaka Dotonbori canal neon signs reflecting in canal waters.",
  "Seoul Gangnam skyscrapers with Lotte World Tower dominating horizon.",
  "Taipei 101 piercing typhoon clouds with earthquake dampeners visible.",
  "Kuala Lumpur Petronas Towers skybridge connecting twin skyscrapers.",
  "Jakarta Monas golden flame above crowded Merdeka Square at dusk.",
  "Manila Intramuros Spanish colonial walls against modern skyline.",
  "Ho Chi Minh City Notre Dame Cathedral with endless motorbike traffic.",
  "Phnom Penh Royal Palace golden spires above Mekong River waterfront.",
  "Colombo Gangaramaya Temple lakeside with lotus tower backdrop.",
  "Male artificial beach with skyscrapers rising from Indian Ocean.",
  "Nairobi skyline with giraffe silhouettes against acacia trees.",
  "Johannesburg Ponte Tower massive cylindrical residential skyscraper.",
  "Lagos Eko Atlantic City emerging from Atlantic Ocean sand reclamation.",
  "Accra Makola Market chaos with Independence Arch in background.",
  "Nairobi skyline with Uhuru Park jacaranda trees in purple bloom.",
  "Addis Ababa Entoto Hill view cathedral domes above African skyline.",
  "Dar es Salaam waterfront ferries crossing against modern towers.",
  "Luanda Ilha de Luanda beachfront mansions against oil rigs.",
  "Algiers Casbah whitewashed alleys tumbling down Mediterranean cliffs.",
  "Casablanca Hassan II Mosque minaret tallest in world on oceanfront.",
  "Tunis Medina UNESCO alleys with blue doors against medina walls.",
  "Mexico City Zócalo cathedral dominating largest city square world.",
  "Bogotá Monserrate cable car ascending Andes backdrop to city.",
  "Lima Miraflores cliffs Pacific Ocean waves against colonial skyline.",
  "Buenos Aires Puerto Madero iron bridges modern yacht harbor.",
  "Santiago Costanera Center Latin America's tallest skyscraper.",
  "Brasília cathedral hyperboloid concrete sails dominating planned city.",
  "Montevideo Rambla waterfront promenade with art deco skyscrapers.",
  "Quito historic center volcanoes backdrop to colonial architecture.",
  "Cartagena Walled City colorful balconies Caribbean waterfront.",
  "Santo Domingo Colonial Zone cobbled streets Alcázar de Colón.",
  "San Juan Old San Juan pastel colonial buildings Atlantic surf.",
  "Santo Domingo Zona Colonial cobblestone alleys fortress walls.",
  "Havana Malecón seawall waves crashing against classic cars.",
  "Santiago de Cuba Sierra Maestra mountains above colonial rooftops.",
  "Guadalajara Hospicio Cabañas frescoes dominating plaza mayor.",
  "Puebla Talavera tiled cathedral dominating colonial zócalo.",
  "Oaxaca Monte Albán pyramids above colonial rooftop panorama.",
  "Merida Paseo Montejo French colonial mansions shaded boulevard.",
  "Guatemala City Zona Viva modern towers volcanic backdrop.",
  "San Salvador Metropolitan Cathedral Salvador del Mundo roundabout.",
  "Managua Xolotlán lakefront cathedral ruins earthquake survivor.",
  "San Pedro Sula airport towers industrial skyline banana republic.",
  "Tegucigalpa historic center mountains encircling colonial core.",
  "San José Central Market colonial arcade modern towers backdrop."
];

const cityLocations = [
  'New York, USA', 'Tokyo, Japan', 'Dubai, UAE', 'Paris, France', 'Hong Kong', 
  'Singapore', 'London, UK', 'Sydney, Australia', 'Shanghai, China', 'Los Angeles, USA',
  'Rio de Janeiro, Brazil', 'Barcelona, Spain', 'Moscow, Russia', 'Cape Town, South Africa',
  'Istanbul, Turkey', 'Mumbai, India', 'Toronto, Canada', 'Seattle, USA', 
  'Las Vegas, USA', 'Amsterdam, Netherlands'
];

const cityDates = [
  '2026-03-17', '2026-03-16', '2026-03-15', '2026-03-14', '2026-03-13', 
  '2026-03-12', '2026-03-11', '2026-03-10', '2026-03-09', '2026-03-08'
];


const images = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/400/300?random=${i + 200}`,
  title: `Cityscape ${i + 1}`,
  category: 'Cityscape',
  description: cityscapeDescriptions[i],
  location: cityLocations[i % cityLocations.length],
  date: cityDates[i % cityDates.length]
}));


function Gallery() {
  const [visibleImages, setVisibleImages] = useState(8);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null); // ← NEW ZOOM STATE
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const galleryRef = useRef(null);

  const loadMoreImages = useCallback(() => {
    setVisibleImages(prev => Math.min(prev + 4, images.length));
  }, []);

  // Chrome-style zoom click
  const handleImageClick = (image, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setZoomPosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height
    });
    setZoomedImage(image);
  };

  const closeZoom = () => {
    setZoomedImage(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        loadMoreImages();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMoreImages]);

  // ESC key to close zoom
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && zoomedImage) {
        closeZoom();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [zoomedImage]);

  return (
    <>
      <Navbar />
      <div className="page-section" ref={galleryRef}>
        <h1 className="page-title">🏙️ Cityscape Gallery</h1>
        <div className="stats">
          <span>{visibleImages} of {images.length} stunning cityscapes loaded</span>
        </div>
        
        <div className="gallery-container">
          {images.slice(0, visibleImages).map((image, index) => (
            <div key={image.id} className="image-card">
              <div
                className={`gallery-item ${hoveredIndex === index ? 'hover' : ''}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={(e) => handleImageClick(image, e)} // ← CLICK TO ZOOM
                style={{ cursor: 'zoom-in' }}
              >
                <img src={image.src} alt={image.title} loading="lazy" />
                <div className="overlay">
                  <h3>{image.title}</h3>
                  <p className="category">🏙️ {image.category}</p>
                </div>
              </div>
              
              <div className="image-info">
                <h4>{image.title}</h4>
                <div className="info-meta">
                  <span className="location">📍 {image.location}</span>
                  <span className="date">📅 {image.date}</span>
                </div>
                <p className="image-description">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {visibleImages < images.length && (
          <div className="load-more" onClick={loadMoreImages}>
            🏙️ Load More Cityscapes
          </div>
        )}

        {/* CHROME-STYLE ZOOM MODAL */}
       {zoomedImage && (
  <div 
    className="zoom-overlay" 
    onClick={closeZoom}
  >
    <div className="zoom-image-container">
      <img 
        src={zoomedImage.src} 
        alt={zoomedImage.title}
        className="zoom-image"
      />
      <div className="zoom-toolbar">
        <button className="zoom-close-btn" onClick={closeZoom}>✕</button>
      </div>
      <div className="zoom-details">
        <h3>{zoomedImage.title}</h3>
        <p>{zoomedImage.location} • {zoomedImage.date}</p>
      </div>
    </div>
  </div>
)}

      </div>
    </>
  );
}

export default Gallery;
