// components/ServiceDetail.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

import RecentWork from './RecentWork';
import HomepageContact from './HomepageContact';

interface ProcessStep {
  title: string;
  description: string;
}



interface ServiceDetailsProps {
  serviceDetails: {
    title: string;
    description: string;
    whyChoose: string[];
    process: ProcessStep[];
  };
}

const ServiceDetail: React.FC<ServiceDetailsProps> = ({ serviceDetails }) => {
  const navigate = useNavigate();

  return (
    <div className="service-detail-page">
      <section className="service-hero">
        <div className="container">
          <h1>{serviceDetails.title}</h1>
          <p className="service-description">{serviceDetails.description}</p>
          <button 
            className="back-button"
            onClick={() => navigate('/services')}
            aria-label="Back to all services"
          >
            ← Back to Services
          </button>
        </div>
      </section>

      <section className="why-choose">
        <div className="container">
          <h2>Why Choose Our {serviceDetails.title}</h2>
          <ul className="benefits-list">
            {serviceDetails.whyChoose.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="our-process">
        <div className="container">
          <h2>Our Process</h2>
          <div className="process-steps">
            {serviceDetails.process.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="additional-sections">
        <RecentWork />
        <HomepageContact />
      </div>
    </div>
  );
};

export default ServiceDetail;