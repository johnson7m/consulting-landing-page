function App() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="container">
            <p className="eyebrow">IT Consulting</p>
            <h1>Helping businesses solve operational and technology problems.</h1>
            <p className="subcopy">
              We build practical solutions, streamline workflows, and create
              clean systems that support growth.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">Get Started</a>
              <a href="#services" className="btn btn-secondary">View Services</a>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <h2>Services</h2>
            <p>
              Consulting, process improvement, reporting solutions, and
              business-facing technology support.
            </p>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <h2>Contact</h2>
            <p>Let’s talk about your business and where you need support.</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;