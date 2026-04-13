import MotionReveal from "../components/MotionReveal";

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-slate-200 bg-stone-50 py-24 md:py-32 lg:py-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.07),transparent_26%),radial-gradient(circle_at_85%_18%,rgba(148,163,184,0.08),transparent_24%)]" />

      <div className="relative mx-auto w-[min(1100px,92%)]">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <MotionReveal>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
              Staffing & Workforce Systems Consulting
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.03] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-7xl">
              Clearer operations, cleaner reporting, and better systems for staffing teams.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600 md:text-xl">
              Placeholder Co helps staffing and workforce vendors reduce reporting
              friction, align fragmented systems, and build practical solutions
              that improve visibility for leadership, delivery teams, and clients.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-slate-950 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Discuss Your Workflow & Reporting
              </a>

              <a
                href="#results"
                className="rounded-full border border-slate-300 px-6 py-3.5 text-sm font-medium text-slate-900 transition hover:bg-white"
              >
                See How We’ve Improved Operations
              </a>
            </div>

            <div className="mt-12 grid max-w-2xl gap-8 sm:grid-cols-2">
              <div className="border-t border-slate-200 pt-5">
                <span className="block text-sm font-medium text-slate-950">
                  Operations visibility
                </span>
                <span className="mt-2 block text-sm leading-7 text-slate-600">
                  Dashboards, workflow insight, and reporting clarity for internal teams and clients.
                </span>
              </div>

              <div className="border-t border-slate-200 pt-5">
                <span className="block text-sm font-medium text-slate-950">
                  Systems alignment
                </span>
                <span className="mt-2 block text-sm leading-7 text-slate-600">
                  Support across ATS, VMS, compliance, and customer-facing workflows.
                </span>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.12}>
            <div className="relative">
              <div className="absolute -left-8 top-8 hidden h-48 w-48 rounded-full bg-blue-500/10 blur-3xl lg:block" />
              <div className="absolute -right-8 bottom-6 hidden h-40 w-40 rounded-full bg-slate-300/20 blur-3xl lg:block" />

              <div className="relative rounded-[32px] border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:p-6">
                <div className="rounded-[24px] bg-stone-50 p-4 ring-1 ring-slate-200">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                        Visibility snapshot
                      </p>
                      <p className="mt-2 text-sm font-medium text-slate-950">
                        A cleaner view of operations
                      </p>
                    </div>
                    <div className="h-3 w-3 rounded-full bg-blue-500" />
                  </div>

                  <div className="grid gap-3">
                    <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                      <div className="mb-3 h-2 w-24 rounded-full bg-slate-300" />
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-16 rounded-xl bg-slate-100" />
                        <div className="h-16 rounded-xl bg-slate-100" />
                        <div className="h-16 rounded-xl bg-slate-100" />
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                      <div className="mb-3 h-2 w-28 rounded-full bg-slate-300" />
                      <div className="space-y-2">
                        <div className="h-3 w-full rounded-full bg-slate-100" />
                        <div className="h-3 w-5/6 rounded-full bg-slate-100" />
                        <div className="h-3 w-2/3 rounded-full bg-slate-100" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="border-t border-slate-200 pt-4">
                    <p className="text-sm font-medium text-slate-950">
                      Reporting spread across systems
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Bring ATS, VMS, compliance, and operational data into clearer reporting views.
                    </p>
                  </div>

                  <div className="border-t border-slate-200 pt-4">
                    <p className="text-sm font-medium text-slate-950">
                      Manual workflows slowing teams down
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Reduce friction with cleaner workflow design and better visibility into what matters.
                    </p>
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