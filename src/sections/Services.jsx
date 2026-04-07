function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <p className="section-label">Services</p>
        <h2>Where we can help</h2>

        <div className="card-grid">
          <article className="card">
            <h3>Process Improvement</h3>
            <p>
              Identify inefficiencies, reduce manual work, and create cleaner,
              more reliable workflows.
            </p>
          </article>

          <article className="card">
            <h3>Reporting & Visibility</h3>
            <p>
              Build dashboards, reporting structures, and operational views that
              support better decisions.
            </p>
          </article>

          <article className="card">
            <h3>Business Technology Support</h3>
            <p>
              Connect tools, organize systems, and create practical solutions
              that help teams execute faster.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Services;