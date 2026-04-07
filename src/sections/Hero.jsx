function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-slate-950 py-28 text-white md:py-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(148,163,184,0.16),transparent_22%)]" />

      <div className="relative mx-auto grid w-[min(1180px,92%)] gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-300">
            Staffing & Workforce Systems Consulting
          </p>

          <h1 className="max-w-5xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
            Clearer operations, stronger reporting, and better systems for staffing teams.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            We help staffing and workforce vendors reduce reporting friction,
            align fragmented systems, and build practical solutions that improve
            visibility for leadership, delivery teams, and clients.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-blue-500 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-blue-400"
            >
              Start a Conversation
            </a>

            <a
              href="#results"
              className="rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/5"
            >
              View Case Studies
            </a>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-sm font-medium text-white">Operations Visibility</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Give leadership and delivery teams cleaner access to the metrics,
              activity, and workflow signals that matter most.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-sm font-medium text-white">Reporting Clarity</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Replace fragmented tracking methods with dashboards, reconciliation
              models, and structured reporting views.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-sm font-medium text-white">Business Systems Support</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Build cleaner alignment across ATS, VMS, compliance, and
              client-facing workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;