const MissionValues = () => {
  const values = [
    {
      title: "Trust",
      subtitle: "Built on transparency and reliability",
      description: "We build lasting relationships through clear communication, honest advice, and dependable service. From day one, you'll know your project is in capable, caring hands."
    },
    {
      title: "Quality",
      subtitle: "Craftsmanship you can count on",
      description: "Our attention to detail, use of high-quality materials, and commitment to excellence ensure every finish is clean, durable, and true to your design."
    },
    {
      title: "Collaboration",
      subtitle: "Working with you, every step of the way",
      description: "We value your input. Our team listens, communicates, and adapts—making the process smooth, efficient, and rewarding for everyone involved."
    },
    {
      title: "Legacy",
      subtitle: "Continuing a family tradition of excellence",
      description: "Founded to honour a family legacy in construction, we're proud to carry forward values of integrity, pride in our work, and building for the long term—not just for today."
    }
  ];

  return (
    <section className="mission-values">
      <div className="container">
        <h2>Our Mission & Values</h2>
        
        <div className="mission-statement">
          <h3>Mission Statement</h3>
          <p>
            At C & M Rendering, our mission is to deliver high-quality rendering solutions that bring 
            your architectural vision to life—built on trust, backed by experience, and delivered with care. 
            Our values are the foundation of every project we take on.
          </p>
        </div>
        
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <h4>{value.title}</h4>
              <p className="subtitle">{value.subtitle}</p>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionValues;