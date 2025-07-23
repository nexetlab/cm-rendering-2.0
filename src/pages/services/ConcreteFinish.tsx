import { useEffect } from 'react';
import ServiceDetail from '../../components/ServiceDetail';
import '../../styles/serviceDetails.css';

const ConcreteFinish = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceDetails = {
    title: "Concrete Finish",
    description: "From raw industrial textures to polished elegance, our concrete finishes add depth and character indoors or out—with designer-level precision.",
    whyChoose: [
      "Modern, industrial-chic aesthetic",
      "Extremely durable and long-lasting",
      "Low maintenance requirements",
      "Can be customized with colours and aggregates"
    ],
    process: [
      { title: "Substrate Preparation", description: "Ensuring proper base for concrete application" },
      { title: "Concrete Application", description: "Precision placement of concrete or overlay" },
      { title: "Finishing", description: "Achieving desired texture - polished, stamped, or exposed aggregate" },
      { title: "Sealing", description: "Application of protective sealants" }
    ]
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="service-banner">
        <div className="banner-image-container">
          <img 
            src="/images/4.jpeg" 
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

export default ConcreteFinish;