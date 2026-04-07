function About() {
  return (
    <section id="about" className="py-20 md:py-24">
      <div className="mx-auto w-[min(1120px,92%)]">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
          About
        </p>

        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          Built around practical problem-solving
        </h2>

        <div className="mt-6 max-w-3xl space-y-5 text-lg leading-8 text-neutral-600">
          <p>
            We work at the intersection of operations, technology, and execution.
            That means understanding the actual business problem first, then
            building a solution that fits how people really work.
          </p>

          <p>
            Our approach favors clarity over complexity. The goal is not to
            overengineer. It is to create cleaner workflows, better visibility,
            and systems that make the business more effective.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;