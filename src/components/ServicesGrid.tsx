import type { Service } from '../types';
import { Link } from 'react-router-dom'; // ✅ Import Link
import '../styles/servicesGrid.css';

const ServicesGrid = () => {
  const services: Service[] = [
    {
      id: 1,
      name: "Acrylic Render / Texture Coatings",
      placeholder: "/images/1.jpeg"
    },
    {
      id: 2,
      name: "Venetian Plaster / Micro Cement",
      placeholder: "/images/2.jpeg"
    },
    {
      id: 3,
      name: "Painting Services",
      placeholder: "/images/3.jpeg"
    },
    {
      id: 4,
      name: "Concrete Finish",
      placeholder: "/images/4.jpeg"
    },
    {
      id: 5,
      name: "Polystyrene Finish",
      placeholder: "/images/5.jpeg"
    },
    {
      id: 6,
      name: "Architectural Mouldings",
      placeholder: "/images/6.jpeg"
    }
  ];

  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-image-placeholder">
              <img
                src={service.placeholder}
                alt={service.name}
                className="service-image"
                loading="lazy"
              />
            </div>
            <h3>{service.name}</h3>

            {/* ✅ Use Link styled like a button */}
            <Link to="/services" className="service-button">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
