import '../styles/trustReasons.css';
import { Link } from 'react-router-dom';

interface Reason {
  title: string;
  description: string;
}

const TrustReasons = () => {
  const reasons: Reason[] = [
    {
      title: "Client-Centric Approach",
      description: "Your needs come first. We tailor every step of the process to ensure a smooth, stress-free experience and outcomes that match your expectations."
    },
    {
      title: "Consistent Quality Oversight",
      description: "With skilled project managers involved daily, we maintain top-tier workmanship and quickly adapt to any challenges that arise."
    },
    {
      title: "A Reputation Built on Trust",
      description: "We're known for our professionalism, reliability, and attention to detail. When you work with us, you're choosing peace of mind and proven results."
    },
    {
      title: "Competitive Pricing",
      description: "At C & M Rendering, we offer competitive pricing without compromising on materials, craftsmanship, or service. Our quotes are transparent, fair, and tailored to your project's needs—giving you exceptional value and peace of mind from start to finish."
    }
  ];

  const formatTitle = (title: string) => {
  const words = title.split(' ');
  const first = words.shift();
  const rest = words.join(' ');
  return (
    <h3>
      <span
        style={{
          backgroundColor: '#fff3e0', // very light orange
          padding: '0.1rem 0.4rem',
          borderRadius: '4px',
          fontWeight: 'bold',
          color: 'var(--secondary-color)'
        }}
      >
        {first}
      </span>{' '}
      <em>{rest}</em>
    </h3>
  );
};


  return (
    <section className="trust-section">
      <div className="trust-content">
        <div className="trust-header">
          <div className="trust-image-container">
            <img 
              src="/images/7.jpeg" 
              alt="Trusted Construction Team" 
              className="trust-image"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/placeholder-trust.jpg';
              }}
            />
            <div className="trust-overlay-circle">
              <h2>Why Homeowners & Builders Trust C & M Rendering</h2>
            </div>
          </div>
        </div>
        <div className="trust-reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              {formatTitle(reason.title)}
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Link to="/about">
        <button className="about-button">About Us</button>
      </Link>
    </section>
  );
};

export default TrustReasons;
