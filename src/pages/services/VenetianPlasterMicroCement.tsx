import { useEffect } from 'react';
import ServiceDetail from '../../components/ServiceDetail';
import '../../styles/serviceDetails.css';

const VenetianPlasterMicroCement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceDetails = {
    title: "Venetian Plaster / Micro-Cement",
    description: "Venetian plaster is an art—and we treat it as such. Our team creates rich, layered textures that mimic natural stone, delivering elegant, high-end finishes that stand the test of time.",
    whyChoose: [
      "Luxurious, high-end appearance",
      "Seamless, joint-free surfaces",
      "Highly durable and long-lasting",
      "Can be used on walls, floors, and ceilings"
    ],
    process: [
      { title: "Surface Preparation", description: "Meticulous preparation to ensure perfectly smooth substrate" },
      { title: "Base Layer", description: "Application of initial layers with specialized tools" },
      { title: "Burnishing", description: "Polishing between layers to achieve depth and sheen" },
      { title: "Final Sealing", description: "Application of protective wax or sealant" }
    ],
    faq: [
      { question: "How is Venetian plaster different from regular plaster?", answer: "Venetian plaster contains marble dust which gives it its distinctive luminous quality and depth." },
      { question: "Can Venetian plaster be used in bathrooms?", answer: "Yes, when properly sealed it's highly moisture-resistant." },
      { question: "How long does the application process take?", answer: "Depending on the complexity, it typically takes 3-5 days including drying time between layers." }
    ]
  };

  return <ServiceDetail serviceDetails={serviceDetails} />;
};

export default VenetianPlasterMicroCement;