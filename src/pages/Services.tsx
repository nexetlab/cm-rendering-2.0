import { useNavigate } from 'react-router-dom';
import ServicesOverview from '../components/ServicesOverview';
import RecentWork from '../components/RecentWork';
import HomepageContact from '../components/HomepageContact';
import '../styles/services.css';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Acrylic Render / Texture Coatings",
      description: "Our approach to acrylic rendering focuses on flexibility and long-term performance. We tailor each finish to suit your surface and style, ensuring a durable, crack-resistant result that holds up against Sydney's climate.",
      icon: "🎨",
      color: "#FF6B35",
      slug: "acrylic-render-texture-coatings"
    },
    {
      id: 2,
      title: "Polystyrene Finish",
      description: "We go beyond basic installation—our team ensures every panel is expertly fitted, sealed, and prepped for rendering. We help you achieve a lightweight, insulated, and structurally sound finish.",
      icon: "🏗️",
      color: "#4ECDC4",
      slug: "polystyrene-finish"
    },
    {
      id: 3,
      title: "Venetian Plaster / Micro-Cement",
      description: "Venetian plaster is an art—and we treat it as such. Our team creates rich, layered textures that mimic natural stone, delivering elegant, high-end finishes that stand the test of time.",
      icon: "⚱️",
      color: "#45B7D1",
      slug: "venetian-plaster-micro-cement"
    },
    {
      id: 4,
      title: "Painting Services",
      description: "Our painting services combine craftsmanship with premium materials to achieve a clean, lasting finish. Whether it's interior or exterior, we focus on surface preparation, precision, and detail to ensure even coverage and colour consistency.",
      icon: "🖌️",
      color: "#96CEB4",
      slug: "painting-services"
    },
    {
      id: 5,
      title: "Architectural Mouldings",
      description: "Our mouldings enhance the character of your home. We offer custom solutions with lightweight, durable materials—perfect for modern or heritage design.",
      icon: "🏛️",
      color: "#FECA57",
      slug: "architectural-mouldings"
    },
    {
      id: 6,
      title: "Concrete Finish",
      description: "From raw industrial textures to polished elegance, our concrete finishes add depth and character indoors or out—with designer-level precision.",
      icon: "🧱",
      color: "#A0A0A0",
      slug: "concrete-finish"
    }
  ];

  const handleLearnMore = (service: typeof services[0]) => {
    // Navigate to individual service page
    navigate(`/services/${service.slug}`);
  };

  return (
    <div className="services-page">
      <ServicesOverview />

      <section className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={service.id} className="service-card">
                <div className="service-image-container">
                  <img src={`/images/${16 + index}.jpeg`} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <button 
                    className="service-button"
                    onClick={() => handleLearnMore(service)}
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="additional-sections">
        <HomepageContact />
        <RecentWork />
      </div>
    </div>
  );
};

export default Services;
