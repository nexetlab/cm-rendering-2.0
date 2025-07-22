import { useEffect } from 'react';
import ServiceDetail from '../../components/ServiceDetail';
import '../../styles/serviceDetails.css';

const ConcreteFinish = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceDetails = {
    title: "Concrete Finish",
    description: "From raw industrial textures to polished elegance, our concrete finishes add depth and character indoors or out—with designer-level precision.",
    whyChoose: [
      "Modern, industrial-chic aesthetic",
      "Extremely durable and long-lasting",
      "Low maintenance requirements",
      "Can be customized with colours and aggregates"
    ],
    process: [
      { title: "Substrate Preparation", description: "Ensuring proper base for concrete application" },
      { title: "Concrete Application", description: "Precision placement of concrete or overlay" },
      { title: "Finishing", description: "Achieving desired texture - polished, stamped, or exposed aggregate" },
      { title: "Sealing", description: "Application of protective sealants" }
    ],
    faq: [
      { question: "Can concrete finishes be used on walls?", answer: "Yes, we can apply decorative concrete finishes on both horizontal and vertical surfaces." },
      { question: "How do you prevent cracking?", answer: "We use control joints, quality mixes, and proper curing techniques to minimize cracking." },
      { question: "Is polished concrete slippery?", answer: "When properly sealed, it has similar slip resistance to other hard flooring options." }
    ]
  };

  return <ServiceDetail serviceDetails={serviceDetails} />;
};

export default ConcreteFinish;