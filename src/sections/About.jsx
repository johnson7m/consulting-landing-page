function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-24">
      <div className="mx-auto w-[min(1120px,92%)]">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
          About
        </p>

        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          Built around practical results
        </h2>

        <div className="mt-6 max-w-3xl space-y-5 text-lg leading-8 text-neutral-600">
          <p>
            Our approach is straightforward: understand the real problem, build
            the right solution, and make sure it actually works for the people
            using it.
          </p>

          <p>
            Whether the need is operational cleanup, reporting clarity, or a
            better customer-facing experience, the goal is always the same:
            useful outcomes with minimal friction.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;