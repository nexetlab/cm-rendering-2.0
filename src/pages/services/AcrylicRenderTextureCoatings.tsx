import { useEffect } from 'react';
import ServiceDetail from '../../components/ServiceDetail';
import '../../styles/serviceDetails.css';

const AcrylicRenderTextureCoatings = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceDetails = {
    title: "Acrylic Render / Texture Coatings",
    description: "Our approach to acrylic rendering focuses on flexibility and long-term performance. We tailor each finish to suit your surface and style, ensuring a durable, crack-resistant result that holds up against Sydney's climate.",
    whyChoose: [
      "Superior crack resistance compared to traditional renders",
      "Wide range of textures and finishes available",
      "Faster drying time allows for quicker project completion",
      "Excellent weather resistance for Sydney's varied climate"
    ],
    process: [
      { title: "Surface Preparation", description: "Thorough cleaning and repair of substrate to ensure proper adhesion" },
      { title: "Base Coat Application", description: "Application of acrylic render base coat with reinforcement mesh where needed" },
      { title: "Texture Application", description: "Creation of your chosen texture using specialized tools and techniques" },
      { title: "Sealing & Protection", description: "Application of protective sealants or topcoats for enhanced durability" }
    ]
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="service-banner">
        <div className="banner-image-container">
          <img 
            src="/images/2.jpeg" 
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

export default AcrylicRenderTextureCoatings;