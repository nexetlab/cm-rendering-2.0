import { useState } from 'react';
import '../styles/faq.css'

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs?: FAQItem[];
  className?: string;
}

const FAQ = ({ faqs: propFaqs, className = '' }: FAQProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const defaultFaqs: FAQItem[] = [
    {
      question: "What services does your architecture firm offer?",
      answer: "We offer comprehensive architectural services including residential and commercial design, space planning, 3D visualization, construction documentation, project management, and interior design. We work on new constructions, renovations, and extensions."
    },
    {
      question: "How long does the design process typically take?",
      answer: "The design process duration varies depending on project complexity. A standard residential project typically takes 4-8 weeks for initial concepts, followed by 6-12 weeks for detailed design and approvals. We'll provide a tailored timeline after understanding your specific needs."
    },
    {
      question: "What are your fees and payment structure?",
      answer: "Our fees are typically structured as a percentage of construction costs (usually 8-15%) or fixed fees for smaller projects. We break payments into stages aligned with project milestones: initial consultation, concept approval, planning submission, construction documentation, and project completion."
    },
    {
      question: "Do you handle planning permissions and approvals?",
      answer: "Yes, we manage the entire approval process including preparing and submitting all required documentation for local council approvals, development applications (DAs), and complying development certificates (CDCs). We liaise with all relevant authorities on your behalf."
    },
    {
      question: "Can you recommend builders or should I find my own?",
      answer: "We maintain a network of trusted builders we've worked with previously and can provide recommendations based on your project type and budget. However, you're welcome to use your own builder - we'll ensure they understand the design intent through detailed documentation."
    },
    {
      question: "What makes your approach to architecture unique?",
      answer: "We combine innovative design with practical functionality, focusing on sustainable materials and energy efficiency. Our collaborative process ensures your vision is realized while adding our expertise in space optimization, natural light, and seamless indoor-outdoor connections."
    }
  ];

  const faqs = propFaqs || defaultFaqs;

  return (
    <div className={`faq-section ${className}`}>
      <h2 className="section-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              <svg className="faq-icon" viewBox="0 0 24 24">
                <path d={activeIndex === index ? "M19 13H5v-2h14v2z" : "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"} />
              </svg>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;