function Hero() {
  return (
    <section id="top" className="bg-white py-24 md:py-32">
      <div className="mx-auto w-[min(1120px,92%)]">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
          IT Consulting • Workflow Design • Reporting Solutions
        </p>

        <h1 className="max-w-5xl text-4xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
          We help businesses streamline operations, improve visibility, and build systems that actually work.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
          From internal dashboards and customer-facing portals to reporting models
          and reconciliation frameworks, we design practical solutions that reduce
          manual effort, improve decision-making, and create better business outcomes.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Book a Conversation
          </a>

          <a
            href="#results"
            className="rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
          >
            View Results
          </a>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
            <p className="text-sm font-medium text-neutral-900">
              Process Improvement
            </p>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              Reduce manual work and clean up fragmented workflows.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
            <p className="text-sm font-medium text-neutral-900">
              Reporting & Visibility
            </p>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              Build dashboards and reporting views that support better decisions.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
            <p className="text-sm font-medium text-neutral-900">
              Business Systems Support
            </p>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              Connect tools, surface key data, and improve stakeholder experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;