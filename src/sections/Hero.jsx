function Hero() {
  return (
    <section id="top" className="bg-white py-24 md:py-32">
      <div className="mx-auto w-[min(1120px,92%)]">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
          IT Consulting
        </p>

        <h1 className="max-w-5xl text-4xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
          Practical technology and business solutions that help companies operate better.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
          We help businesses improve workflows, reporting, systems, and execution
          with solutions that are clean, useful, and built for the real world.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Book a Conversation
          </a>

          <a
            href="#services"
            className="rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;