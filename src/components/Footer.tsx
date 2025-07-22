// Footer.tsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Add this import
import '../styles/footer.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' }
  ];

  const contactInfo = [
    {
      href: 'mailto:info@cmconstructions.com.au',
      icon: '✉️',
      text: 'info@cmconstructions.com.au',
      type: 'email'
    },
    {
      href: 'tel:0420806161',
      icon: '📞',
      text: '0420 806 161',
      type: 'phone'
    }
  ];

  const socialLinks = [
    {
      href: 'https://www.instagram.com/c_mrendering',
      icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg',
      label: 'Instagram',
      color: '#e4405f'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const triggerHeight = pageHeight - 400;
      setIsVisible(scrollPosition > triggerHeight);
    };

    handleScroll();

    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${isVisible ? 'visible' : ''}`}>
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-section quick-links-section">
            <h3 className="section-title">Quick Links</h3>
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="footer-link"
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="footer-section logo-section">
            <div className="logo-container" style={{ marginTop: '1rem' }}>
              <img
                src="/images/logo-placeholder.png"
                alt="C & M Rendering Company Logo"
                className="footer-logo"
              />
              <div className="company-tagline">
                <h3>C & M Rendering</h3>
                <p>Quality Construction Solutions</p>
              </div>
            </div>
          </div>

          <div className="footer-section contact-social-wrapper">
            <div className="contact-social-section horizontal">
              <div className="contact-info">
                <h3>Get In Touch</h3>
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="contact-link"
                    aria-label={`Contact us via ${contact.type}: ${contact.text}`}
                  >
                    <span className="contact-icon">{contact.icon}</span>
                    <span>{contact.text}</span>
                  </a>
                ))}
              </div>
              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow us on ${social.label}`}
                    >
                      <img
                        src={social.icon}
                        alt={`${social.label} icon`}
                        className="social-logo"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="copyright-content">
          <span>&copy; {currentYear} C & M Rendering. All rights reserved.</span>
          <span className="separator">|</span>
          <Link
            to="/privacy-policy"
            className="privacy-link"
            aria-label="Read our Privacy Policy"
          >
            Privacy Policy
          </Link>
          <span className="separator">|</span>
          <span>Crafted with care in Australia 🇦🇺</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
