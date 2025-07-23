import { useState } from 'react';
import '../styles/contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
  };


  

  // Sample reviews data - replace with your actual reviews
  const reviews = [
    {
      name: "sudha gadupu",
      rating: 5,
      date: "11 months ago",
      text: "I love C & M Rendering works. Nikki is great Business women who have very high standards of work and friendly attitude and she is a great personality to deal with. Her finishing is amazing. Love you Nikki for marketing my house look luxury and Beautiful.. standing out from all our street houses",
      avatar: "SG"
    },
    {
      name: "Krishna Oruganti",
      rating: 5,
      date: "11 month ago", 
      text: "Nikki from C&M Rendering is an exceptional professional. She is highly ethical, takes her work seriously, and consistently provides the right advice. A true perfectionist, Nikki never settles for anything less than perfect, no matter how small the deviation. Such dedication is rare in any trade these days. She consistently upholds trust and reliability, delivering projects on time. Her team, reflecting Nikki's high standards, maintains a clean and tidy job site throughout the project and leaves it in pristine condition.",
      avatar: "KO"
    },
    {
      name: "Avijit Ghosh",
      rating: 5,
      date: "9 months ago",
      text: "Nikki and her team has done a good job with rendering my facade. Happy with their professionalism.",
      avatar: "AG"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`star ${index < rating ? 'filled' : 'empty'}`}
        viewBox="0 0 24 24"
        width="16"
        height="16"
      >
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          fill={index < rating ? "#FFD700" : "#E0E0E0"}
        />
      </svg>
    ));
  };

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Let's Build Your Vision, Together</h1>
          <p className="hero-description">
            Your dream project starts with a simple conversation. Fill out our enquiry form, and our team will be ready to listen, 
            collaborate, and guide you every step of the way—turning your ideas into a space that truly reflects you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form-section">
          <h2 className="section-title">Get In Touch</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message / Job Type"
                rows={5}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Let's Bring Your Project to Life – Get In Touch Today
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info-section">
          <div className="info-card">
            <h3 className="info-title">Direct Contact</h3>
            <div className="contact-method">
              <svg viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <a href="mailto:info@cmconstructions.com.au">info@cmconstructions.com.au</a>
            </div>
            <div className="contact-method">
              <svg viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <a href="tel:0420806161">0420 806 161</a>
            </div>
            <div className="contact-method">
              <svg viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>ABN: [Your ABN Here]</span>
            </div>
          </div>
        </div>
      </div>

      

      {/* Google Reviews Section */}
      <div className="reviews-section">
        <div className="reviews-header">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="reviews-summary">
            <div className="rating-overview">
              <div className="stars-large">
                {renderStars(Math.round(averageRating))}
              </div>
              <div className="rating-text">
                <span className="rating-number">{averageRating.toFixed(1)}</span>
                <span className="rating-total">({totalReviews} reviews)</span>
              </div>
            </div>
            <a 
              href="https://www.google.com/maps/place/C+%26+M+Rendering/@-33.8579121,150.8070933,11z/data=!3m1!4b1!4m6!3m5!1s0xa7797bcc6c956925:0x7a95acb1010f81e8!8m2!3d-33.8580218!4d150.9719001!16s%2Fg%2F11vplnngxl?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="google-reviews-link"
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              View all Google Reviews
            </a>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <div className="reviewer-info">
                  <div className="avatar">
                    {review.avatar}
                  </div>
                  <div className="reviewer-details">
                    <h4 className="reviewer-name">{review.name}</h4>
                    <span className="review-date">{review.date}</span>
                  </div>
                </div>
                <div className="review-rating">
                  {renderStars(review.rating)}
                </div>
              </div>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>

        <div className="reviews-footer">
          <a 
            href="https://www.google.com/maps/place/C+%26+M+Rendering/@-33.8579121,150.8070933,11z/data=!3m1!4b1!4m6!3m5!1s0xa7797bcc6c956925:0x7a95acb1010f81e8!8m2!3d-33.8580218!4d150.9719001!16s%2Fg%2F11vplnngxl?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="write-review-btn"
          >
            Write a Review on Google
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;