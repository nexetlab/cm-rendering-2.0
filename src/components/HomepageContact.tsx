// HomepageContact.tsx
import { Link } from 'react-router-dom';
import '../styles/homepageContact.css';

const HomepageContact = () => {
  return (
    <section className="homepage-contact">
      <div className="contact-container">
        <div className="contact-text">
          <h2 className="contact-heading">
            Let's chat
          </h2>
          <h3 className="contact-subheading">
            Interested in working together?
          </h3>
          <p className="contact-description">
            Reach out to us, and together, we'll explore how we can transform your house into the home you've always desired.
          </p>
        </div>

        <Link to="/contact" className="contact-button-link">
          <button className="contact-button">
            Get in Touch
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomepageContact;
