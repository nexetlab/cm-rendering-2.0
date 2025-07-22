import { useEffect } from 'react';
import ServiceDetail from '../../components/ServiceDetail';
import '../../styles/serviceDetails.css';

const PaintingServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceDetails = {
    title: "Painting Services",
    description: "Our painting services combine craftsmanship with premium materials to achieve a clean, lasting finish. Whether it's interior or exterior, we focus on surface preparation, precision, and detail to ensure even coverage and colour consistency.",
    whyChoose: [
      "Meticulous surface preparation for optimal results",
      "Use of premium paints for better durability",
      "Attention to detail in cutting in and finishing",
      "Clean, professional work practices"
    ],
    process: [
      { title: "Surface Preparation", description: "Repairing imperfections, sanding, and thorough cleaning" },
      { title: "Priming", description: "Application of appropriate primers for optimal adhesion" },
      { title: "Painting", description: "Multiple coats applied with professional techniques" },
      { title: "Final Inspection", description: "Quality check and touch-ups as needed" }
    ],
    faq: [
      { question: "How long should I wait before painting new render?", answer: "Typically 4-6 weeks to allow for complete curing, depending on conditions." },
      { question: "Do you provide colour consultation?", answer: "Yes, we can provide expert advice on colour selection and combinations." },
      { question: "How long will the paint last?", answer: "With proper preparation and quality paints, exterior paint jobs typically last 7-10 years, interiors 10+ years." }
    ]
  };

  return <ServiceDetail serviceDetails={serviceDetails} />;
};

export default PaintingServices;