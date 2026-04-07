function Hero() {
  return (
    <section id="top" className="bg-white py-28 md:py-36">
      <div className="mx-auto w-[min(1120px,92%)]">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
          Staffing & Workforce Consulting
        </p>

        <h1 className="max-w-5xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Practical systems and reporting solutions for staffing teams that need clearer operations and better visibility.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
          We help staffing and workforce vendors reduce reporting friction,
          align fragmented systems, and build solutions that improve visibility
          for both internal teams and external clients.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:opacity-90"
          >
            Start a Conversation
          </a>

          <a
            href="#results"
            className="rounded-xl border border-neutral-300 px-6 py-3 text-sm font-medium hover:bg-neutral-100"
          >
            View Case Studies
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;