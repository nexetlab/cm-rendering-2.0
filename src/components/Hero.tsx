import '../styles/hero.css';

const Hero = () => {
  const newsItems = [
    "Project Management",
    "Acrylic Rendering",
    "Polystyrene Installation",
    "Venetian Plaster",
    "Micro-Cement",
    "Architectural Mouldings"
  ];

  return (
    <section className="hero">
      <video
        className="hero-video"
        src='/videos/1114477_Plan_Architecture_1920x1080.mp4'
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title"></h1>
        <p className="hero-motto"></p>
      </div>
      
      <div className="news-ticker">
        <div className="news-ticker-content">
          {newsItems.map((item, index) => (
            <span key={index} className="ticker-item">
              {item}
              <span className="ticker-divider">|</span>
            </span>
          ))}
          {newsItems.map((item, index) => (
            <span key={`dup-${index}`} className="ticker-item">
              {item}
              <span className="ticker-divider">|</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
