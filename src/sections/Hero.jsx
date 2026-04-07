function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <p className="eyebrow">IT Consulting</p>
        <h1>Practical technology and business solutions that help companies operate better.</h1>
        <p className="hero-copy">
          We help businesses improve workflows, reporting, systems, and execution
          with solutions that are clean, useful, and built for the real world.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Book a Conversation
          </a>
          <a href="#services" className="btn btn-secondary">
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;