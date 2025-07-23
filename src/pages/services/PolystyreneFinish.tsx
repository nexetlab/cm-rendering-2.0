import { useEffect } from 'react';
import ServiceDetail from '../../components/ServiceDetail';
import '../../styles/serviceDetails.css';

const PolystyreneFinish = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceDetails = {
    title: "Polystyrene Finish",
    description: "We go beyond basic installation—our team ensures every panel is expertly fitted, sealed, and prepped for rendering. We help you achieve a lightweight, insulated, and structurally sound finish.",
    whyChoose: [
      "Excellent thermal insulation properties",
      "Lightweight solution that reduces structural load",
      "Creates smooth surfaces over uneven substrates",
      "Cost-effective alternative to traditional materials"
    ],
    process: [
      { title: "Panel Installation", description: "Precision fitting of polystyrene panels to the substrate" },
      { title: "Reinforcement", description: "Application of fibreglass mesh and base coat for structural integrity" },
      { title: "Render Application", description: "Specialized acrylic render application for durable finish" },
      { title: "Final Texture", description: "Creation of your chosen decorative finish" }
    ]
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="service-banner">
        <div className="banner-image-container">
          <img 
            src="/images/7.jpeg" 
            alt="Acrylic Render Texture Coatings" 
            className="banner-image"
          />
          <div className="banner-overlay">
            <div className="banner-content">
              <h1 className="banner-title">{serviceDetails.title}</h1>
            </div>
          </div>
        </div>
      </div>
      
      <ServiceDetail serviceDetails={serviceDetails} />
    </div>
  );
};

export default PolystyreneFinish;