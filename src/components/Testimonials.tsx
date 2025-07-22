import { useState, useEffect } from 'react';
import '../styles/testimonials.css';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  rating: number;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "C & M Rendering did an amazing job on our house. The attention to detail was exceptional!",
      author: "Sarah J., Homeowner",
      rating: 5
    },
    {
      id: 2,
      quote: "Professional from start to finish. Highly recommend their services to anyone looking for quality work.",
      author: "Michael T., Builder",
      rating: 5
    },
    {
      id: 3,
      quote: "Nikki and her team went above and beyond to ensure we were happy with every aspect of the project.",
      author: "Lisa M., Property Developer",
      rating: 4
    },
    {
      id: 4,
      quote: "The rendering work transformed our home completely. Worth every penny!",
      author: "David K., Architect",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    let interval: number;
    
    if (isAutoPlaying) {
      interval = window.setInterval(() => {
        nextSlide();
      }, 3000);
    }

    return () => window.clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);

  const renderStars = (rating: number) => {
    return (
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 24 24"
            className={`star ${i < rating ? 'filled' : ''}`}
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section 
      className="testimonials-section"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
    >
      <h2 className="testimonials-heading">What Our Clients Say</h2>
      
      <div className="testimonials-container">
        <button 
          className="nav-arrow left-arrow"
          onClick={prevSlide}
          aria-label="Previous testimonial"
        >
          <svg viewBox="0 0 24 24">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
          </svg>
        </button>

        <div className="testimonials-slider">
          <div 
            className="testimonials-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <p className="quote">"{testimonial.quote}"</p>
                {renderStars(testimonial.rating)}
                <p className="author">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>

        <button 
          className="nav-arrow right-arrow"
          onClick={nextSlide}
          aria-label="Next testimonial"
        >
          <svg viewBox="0 0 24 24">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
          </svg>
        </button>
      </div>

      <div className="testimonials-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <a 
        href="https://www.google.com/maps/place/C+%26+M+Rendering/@-33.8579121,150.8070933,11z/data=!3m1!4b1!4m6!3m5!1s0xa7797bcc6c956925:0x7a95acb1010f81e8!8m2!3d-33.8580218!4d150.9719001!16s%2Fg%2F11vplnngxl?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="reviews-link"
      >
        Read more reviews on Google Maps
      </a>
    </section>
  );
};

export default Testimonials;