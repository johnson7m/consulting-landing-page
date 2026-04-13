import MotionReveal from "../components/MotionReveal";

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-slate-950 py-24 text-white md:py-32 lg:py-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(148,163,184,0.10),transparent_24%)]" />

      <div className="relative mx-auto w-[min(1100px,92%)]">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <MotionReveal>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-300">
              Staffing & Workforce Systems Consulting
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.03] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              Clearer operations, cleaner reporting, and better systems for staffing teams.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300 md:text-xl">
              Placeholder Co helps staffing and workforce vendors reduce reporting
              friction, align fragmented systems, and build practical solutions
              that improve visibility for leadership, delivery teams, and clients.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-blue-500 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-blue-400"
              >
                Discuss Your Workflow & Reporting
              </a>

              <a
                href="#results"
                className="rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/5"
              >
                See How We’ve Improved Operations
              </a>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.12}>
            <div className="relative">
              <div className="absolute -left-6 top-8 hidden h-48 w-48 rounded-full bg-blue-500/10 blur-3xl lg:block" />

              <div className="relative rounded-[32px] bg-white/6 p-5 ring-1 ring-white/10 backdrop-blur-md md:p-6">
                <div className="rounded-[24px] bg-slate-900/50 p-4 ring-1 ring-white/8">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                        Visibility snapshot
                      </p>
                      <p className="mt-2 text-sm font-medium text-white">
                        A cleaner view of operations
                      </p>
                    </div>
                    <div className="h-3 w-3 rounded-full bg-blue-400" />
                  </div>

                  <div className="grid gap-3">
                    <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/8">
                      <div className="mb-3 h-2 w-24 rounded-full bg-slate-500/60" />
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-16 rounded-xl bg-slate-200/10" />
                        <div className="h-16 rounded-xl bg-slate-200/10" />
                        <div className="h-16 rounded-xl bg-slate-200/10" />
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/8">
                      <div className="mb-3 h-2 w-28 rounded-full bg-slate-500/60" />
                      <div className="space-y-2">
                        <div className="h-3 w-full rounded-full bg-slate-200/10" />
                        <div className="h-3 w-5/6 rounded-full bg-slate-200/10" />
                        <div className="h-3 w-2/3 rounded-full bg-slate-200/10" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <span className="block text-sm font-medium text-white">
                      Operations visibility
                    </span>
                    <span className="mt-2 block text-sm leading-7 text-slate-300">
                      Dashboards, workflow insight, and reporting clarity for internal teams and clients.
                    </span>
                  </div>

                  <div>
                    <span className="block text-sm font-medium text-white">
                      Systems alignment
                    </span>
                    <span className="mt-2 block text-sm leading-7 text-slate-300">
                      Support across ATS, VMS, compliance, and customer-facing workflows.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}

export default Hero;