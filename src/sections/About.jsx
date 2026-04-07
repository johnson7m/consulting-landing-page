function About() {
  return (
    <section id="about" className="py-20 md:py-24">
      <div className="mx-auto w-[min(1120px,92%)]">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
          Approach
        </p>

        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Built around real operational problems, not abstract transformation
        </h2>

        <div className="mt-6 max-w-3xl space-y-5 text-lg leading-8 text-neutral-600">
          <p>
            We focus on solving problems that sit between systems, workflows,
            and execution. That means understanding how your team actually works,
            not just how systems are supposed to work.
          </p>

          <p>
            The goal is simple: reduce friction, improve visibility, and create
            solutions that make the business easier to operate.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;