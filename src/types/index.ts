// Service type for ServicesGrid component
export interface Service {
  id: number;
  name: string;
  placeholder: string;
}

// Reason type for TrustReasons component
export interface Reason {
  title: string;
  description: string;
}

// Testimonial type for Testimonials component
export interface Testimonial {
  id: number;
  quote: string;
  author: string;
}