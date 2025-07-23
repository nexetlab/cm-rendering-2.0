import { useEffect } from 'react';
import ServiceDetail from '../../components/ServiceDetail';
import '../../styles/serviceDetails.css';

const VenetianPlasterMicroCement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceDetails = {
    title: "Venetian Plaster / Micro-Cement",
    description: "Venetian plaster is an art—and we treat it as such. Our team creates rich, layered textures that mimic natural stone, delivering elegant, high-end finishes that stand the test of time.",
    whyChoose: [
      "Luxurious, high-end appearance",
      "Seamless, joint-free surfaces",
      "Highly durable and long-lasting",
      "Can be used on walls, floors, and ceilings"
    ],
    process: [
      { title: "Surface Preparation", description: "Meticulous preparation to ensure perfectly smooth substrate" },
      { title: "Base Layer", description: "Application of initial layers with specialized tools" },
      { title: "Burnishing", description: "Polishing between layers to achieve depth and sheen" },
      { title: "Final Sealing", description: "Application of protective wax or sealant" }
    ]
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="service-banner">
        <div className="banner-image-container">
          <img 
            src="/images/15.jpeg" 
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

export default VenetianPlasterMicroCement;