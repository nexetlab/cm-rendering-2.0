import { useEffect } from 'react';
import ServiceDetail from '../../components/ServiceDetail';
import '../../styles/serviceDetails.css';

const ArchitecturalMouldings = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceDetails = {
    title: "Architectural Mouldings",
    description: "Our mouldings enhance the character of your home. We offer custom solutions with lightweight, durable materials—perfect for modern or heritage design.",
    whyChoose: [
      "Custom designs to match your architectural style",
      "Lightweight yet durable materials",
      "Precision installation for seamless integration",
      "Can transform plain spaces into elegant interiors"
    ],
    process: [
      { title: "Design Consultation", description: "Discussing your vision and architectural style" },
      { title: "Material Selection", description: "Choosing between polyurethane, plaster, or other materials" },
      { title: "Fabrication", description: "Custom creation of your mouldings" },
      { title: "Installation & Finishing", description: "Precise installation and seamless finishing" }
    ]
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="service-banner">
        <div className="banner-image-container">
          <img 
            src="/images/3.jpeg" 
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

export default ArchitecturalMouldings;