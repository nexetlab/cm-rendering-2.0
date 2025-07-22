import { useEffect } from 'react';
import ServiceDetail from '../../components/ServiceDetail';
import '../../styles/serviceDetails.css';

const ArchitecturalMouldings = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceDetails = {
    title: "Architectural Mouldings",
    description: "Our mouldings enhance the character of your home. We offer custom solutions with lightweight, durable materials—perfect for modern or heritage design.",
    whyChoose: [
      "Custom designs to match your architectural style",
      "Lightweight yet durable materials",
      "Precision installation for seamless integration",
      "Can transform plain spaces into elegant interiors"
    ],
    process: [
      { title: "Design Consultation", description: "Discussing your vision and architectural style" },
      { title: "Material Selection", description: "Choosing between polyurethane, plaster, or other materials" },
      { title: "Fabrication", description: "Custom creation of your mouldings" },
      { title: "Installation & Finishing", description: "Precise installation and seamless finishing" }
    ],
    faq: [
      { question: "What materials do you use for mouldings?", answer: "We work with high-quality polyurethane, plaster, and occasionally timber, depending on your needs." },
      { question: "Can you match existing mouldings in heritage homes?", answer: "Yes, we specialize in replicating and matching period mouldings." },
      { question: "How durable are modern moulding materials?", answer: "Modern materials like polyurethane are extremely durable, resistant to cracking and moisture." }
    ]
  };

  return <ServiceDetail serviceDetails={serviceDetails} />;
};

export default ArchitecturalMouldings;