import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCard = ({ title, description, image }: ServiceCardProps) => {
  const isExternal = image.startsWith('http');

  return (
    <div className="service-card">
      <div className="service-image-container">
        <img
          src={isExternal ? image : `/images/services/${image}`}
          alt={title}
          className="service-image"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/placeholder.jpg';
          }}
        />
      </div>
      <div className="service-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to="/portfolio" className="service-link">
          View Portfolio Examples →
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
