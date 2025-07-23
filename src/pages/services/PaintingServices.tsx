import { useEffect } from 'react';
import ServiceDetail from '../../components/ServiceDetail';
import '../../styles/serviceDetails.css';

const PaintingServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceDetails = {
    title: "Painting Services",
    description: "Our painting services combine craftsmanship with premium materials to achieve a clean, lasting finish. Whether it's interior or exterior, we focus on surface preparation, precision, and detail to ensure even coverage and colour consistency.",
    whyChoose: [
      "Meticulous surface preparation for optimal results",
      "Use of premium paints for better durability",
      "Attention to detail in cutting in and finishing",
      "Clean, professional work practices"
    ],
    process: [
      { title: "Surface Preparation", description: "Repairing imperfections, sanding, and thorough cleaning" },
      { title: "Priming", description: "Application of appropriate primers for optimal adhesion" },
      { title: "Painting", description: "Multiple coats applied with professional techniques" },
      { title: "Final Inspection", description: "Quality check and touch-ups as needed" }
    ]
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="service-banner">
        <div className="banner-image-container">
          <img 
            src="/images/10.jpeg" 
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

export default PaintingServices;