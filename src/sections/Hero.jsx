import MotionReveal from "../components/MotionReveal";
import { BarChart3, GitBranch, ArrowUpRight } from "lucide-react";

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-slate-200 bg-stone-50 pt-20 md:pt-24 lg:pt-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.07),transparent_26%),radial-gradient(circle_at_85%_18%,rgba(148,163,184,0.08),transparent_24%)]" />

      <div className="relative mx-auto w-[min(1100px,92%)] pb-24 md:pb-28 lg:pb-32">
        <div className="grid gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <MotionReveal>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
              VisibleGap · Staffing & Workforce Systems Consulting
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-7xl">
              Clearer operations, cleaner reporting, and better systems for staffing teams.
            </h1>

            <p className="mt-8 max-w-xl text-[17px] leading-8 text-slate-600 md:text-xl">
              VisibleGap helps staffing and workforce vendors reduce reporting
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

            <div className="mt-14 grid max-w-2xl gap-8 sm:grid-cols-2">
              <MotionReveal delay={0.08} y={16} className="border-t border-slate-200 pt-5">
                <div className="flex items-center gap-2 text-sky-600">
                  <BarChart3 className="h-4 w-4" />
                  <span className="text-sm font-medium text-slate-950">
                    Operations visibility
                  </span>
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Dashboards, workflow insight, and reporting clarity for internal teams and clients.
                </p>
              </MotionReveal>

              <MotionReveal delay={0.14} y={16} className="border-t border-slate-200 pt-5">
                <div className="flex items-center gap-2 text-sky-600">
                  <GitBranch className="h-4 w-4" />
                  <span className="text-sm font-medium text-slate-950">
                    Systems alignment
                  </span>
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Support across ATS, VMS, compliance, and customer-facing workflows.
                </p>
              </MotionReveal>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.12}>
            <div className="relative">
              <div className="absolute -left-8 top-8 hidden h-48 w-48 rounded-full bg-sky-500/10 blur-3xl lg:block" />
              <div className="absolute -right-8 bottom-6 hidden h-40 w-40 rounded-full bg-slate-300/20 blur-3xl lg:block" />

              <div className="relative rounded-[32px] border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:p-6">
                <div className="rounded-[24px] bg-stone-50 p-4 ring-1 ring-slate-200">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                        Visibility snapshot
                      </p>
                      <p className="mt-2 text-sm font-medium text-slate-950">
                        A clearer view of operations
                      </p>
                    </div>
                    <div className="h-3 w-3 rounded-full bg-sky-500" />
                  </div>

                  <div className="grid gap-3">
                    <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                      <div className="mb-3 flex items-center justify-between">
                        <div className="h-2 w-24 rounded-full bg-slate-300" />
                        <BarChart3 className="h-4 w-4 text-sky-600" />
                      </div>

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

                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-sky-600">
                  <span>Built to reduce reporting friction</span>
                  <ArrowUpRight className="h-4 w-4" />
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