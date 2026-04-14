import MotionReveal from "../components/MotionReveal";
import {
  BarChart3,
  GitBranch,
  ArrowUpRight,
  BriefcaseBusiness,
  TriangleAlert,
  CircleCheckBig,
  TrendingUp,
} from "lucide-react";

function HeroMetric({ label, value, icon: Icon, tone = "neutral" }) {
  const toneClasses =
    tone === "sky"
      ? "bg-sky-50 ring-sky-100"
      : "bg-white ring-slate-200";

  return (
    <div className={`rounded-2xl p-4 ring-1 ${toneClasses}`}>
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
          {label}
        </p>
        <Icon className="h-4 w-4 text-sky-600" />
      </div>

      <p className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
        {value}
      </p>
    </div>
  );
}

function HeroListRow({ label, width }) {
  return (
    <div className="space-y-2">
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
        {label}
      </div>
      <div
        className="h-3 rounded-full bg-slate-200"
        style={{ width }}
      />
    </div>
  );
}

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
              Visible Gap · Staffing & Workforce Systems Consulting
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-7xl">
              Clearer operations, cleaner reporting, and better systems for staffing teams.
            </h1>

            <p className="mt-8 max-w-xl text-[17px] leading-8 text-slate-600 md:text-xl">
              Visible Gap helps staffing and workforce vendors reduce reporting
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
                        Daily Operations View
                      </p>
                      <p className="mt-2 text-sm font-medium text-slate-950">
                        Leadership reporting snapshot
                      </p>
                    </div>
                    <div className="h-3 w-3 rounded-full bg-sky-500" />
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <HeroMetric
                      label="Open Reqs"
                      value="42"
                      icon={BriefcaseBusiness}
                      tone="neutral"
                    />
                    <HeroMetric
                      label="At Risk"
                      value="7"
                      icon={TriangleAlert}
                      tone="neutral"
                    />
                    <HeroMetric
                      label="Accepted"
                      value="18"
                      icon={CircleCheckBig}
                      tone="sky"
                    />
                  </div>

                  <div className="mt-4 rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                    <div className="mb-4 flex items-center gap-2 text-slate-700">
                      <BarChart3 className="h-4 w-4 text-sky-600" />
                      <span className="text-sm font-medium">Offer Activity Trend</span>
                    </div>

                    <div className="flex h-24 items-end gap-2">
                      {[38, 52, 35, 67, 74, 58, 82].map((n, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-lg bg-sky-100"
                          style={{ height: `${n}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                    <div className="mb-4 flex items-center gap-2 text-slate-700">
                      <TrendingUp className="h-4 w-4 text-sky-600" />
                      <span className="text-sm font-medium">Reporting Focus Areas</span>
                    </div>

                    <div className="space-y-3">
                      <HeroListRow label="Client visibility" width="92%" />
                      <HeroListRow label="Workstream performance" width="78%" />
                      <HeroListRow label="Offer throughput" width="64%" />
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