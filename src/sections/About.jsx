function About() {
  return (
    <section id="about" className="bg-slate-950 py-24 text-white md:py-32">
      <div className="mx-auto grid w-[min(1200px,92%)] gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
            Our approach
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Built around real operational problems, not abstract transformation
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-8 text-slate-300">
          <p>
            Placeholder Co focuses on the problems that sit between systems,
            workflows, and execution. That means understanding how staffing teams
            actually work, where visibility breaks down, and where manual
            friction starts to compound.
          </p>

          <p>
            The goal is simple: reduce noise, improve clarity, and build
            solutions that make the business easier to operate for internal
            stakeholders and external clients alike.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;