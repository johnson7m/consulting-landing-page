import MotionReveal from "../components/MotionReveal";
import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  CircleCheckBig,
  GitBranch,
  ListChecks,
  MonitorCheck,
  TriangleAlert,
} from "lucide-react";

function HeroMetric({ label, value, icon, tone = "neutral" }) {
  const MetricIcon = icon;
  const toneClasses =
    tone === "sky"
      ? "bg-sky-50 ring-sky-100"
      : "bg-white ring-slate-200";

  return (
    <div className={`rounded-2xl p-4 ring-1 ${toneClasses}`}>
      <div className="flex items-center justify-between gap-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
          {label}
        </p>
        <MetricIcon className="h-4 w-4 shrink-0 text-sky-600" />
      </div>

      <p className="mt-3 text-2xl font-semibold text-slate-950">{value}</p>
    </div>
  );
}

function FocusRow({ label, value, width }) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
      <div>
        <p className="text-sm font-medium text-slate-800">{label}</p>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full rounded-full bg-sky-500" style={{ width }} />
        </div>
      </div>
      <span className="text-sm font-semibold text-slate-950">{value}</span>
    </div>
  );
}

function WorkflowStep({ icon, title, text }) {
  const StepIcon = icon;

  return (
    <div className="flex gap-3 border-t border-slate-200 pt-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600 ring-1 ring-sky-100">
        <StepIcon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-950">{title}</p>
        <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-slate-200 bg-stone-50 pt-20 md:pt-24 lg:pt-28"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />

      <div className="relative mx-auto w-[min(1100px,92%)] pb-24 md:pb-28 lg:pb-32">
        <div className="grid gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <MotionReveal>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
              Operations Visibility & Systems Consulting
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.04] tracking-normal text-slate-950 sm:text-5xl lg:text-7xl">
              Find the gaps. Build the system. See the work clearly.
            </h1>

            <p className="mt-8 max-w-2xl text-[17px] leading-8 text-slate-600 md:text-xl">
              Visible Gap helps staffing, workforce, and growing SMB teams turn
              scattered tools, manual reporting, and unclear workflows into practical
              systems, dashboards, and implementation roadmaps.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-slate-950 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Request a Visibility Audit
              </a>

              <a
                href="#pricing"
                className="rounded-full border border-slate-300 px-6 py-3.5 text-sm font-medium text-slate-900 transition hover:bg-white"
              >
                View Deliverables & Pricing
              </a>
            </div>

            <div className="mt-14 grid max-w-2xl gap-8 sm:grid-cols-2">
              <MotionReveal delay={0.08} y={16} className="border-t border-slate-200 pt-5">
                <div className="flex items-center gap-2 text-sky-600">
                  <BriefcaseBusiness className="h-4 w-4" />
                  <span className="text-sm font-medium text-slate-950">
                    Staffing & workforce vendors
                  </span>
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Account health, pipeline visibility, CRM/ATS/VMS reporting, and
                  cleaner handoffs across delivery teams.
                </p>
              </MotionReveal>

              <MotionReveal delay={0.14} y={16} className="border-t border-slate-200 pt-5">
                <div className="flex items-center gap-2 text-sky-600">
                  <MonitorCheck className="h-4 w-4" />
                  <span className="text-sm font-medium text-slate-950">
                    SMB owners & operators
                  </span>
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Clearer tools, follow-up workflows, metrics, and automation decisions
                  without enterprise-level complexity.
                </p>
              </MotionReveal>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.12}>
            <div className="relative rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:p-6">
              <div className="rounded-[22px] bg-stone-50 p-4 ring-1 ring-slate-200">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                      Visibility Map
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-950">
                      From scattered inputs to operational signal
                    </p>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                    <BarChart3 className="h-4 w-4" />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <HeroMetric label="Unclear" value="Tools" icon={TriangleAlert} />
                  <HeroMetric label="Manual" value="Reports" icon={ListChecks} />
                  <HeroMetric label="Ready" value="Views" icon={CircleCheckBig} tone="sky" />
                </div>

                <div className="mt-4 rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                  <div className="mb-5 flex items-center gap-2 text-slate-700">
                    <GitBranch className="h-4 w-4 text-sky-600" />
                    <span className="text-sm font-medium">Operational focus</span>
                  </div>

                  <div className="space-y-5">
                    <FocusRow label="Pipeline and account visibility" value="High" width="88%" />
                    <FocusRow label="Workflow handoff clarity" value="Med" width="72%" />
                    <FocusRow label="Reporting readiness" value="Build" width="64%" />
                  </div>
                </div>

                <div className="mt-4 rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                  <div className="grid gap-4">
                    <WorkflowStep
                      icon={TriangleAlert}
                      title="Find gaps"
                      text="Map the friction, missing data, and unclear decisions."
                    />
                    <WorkflowStep
                      icon={GitBranch}
                      title="Build system"
                      text="Prioritize workflows, tools, fields, and reporting logic."
                    />
                    <WorkflowStep
                      icon={BarChart3}
                      title="See work"
                      text="Create views leaders and operators can actually use."
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 text-sm font-medium text-sky-600">
                <span>Practical systems work, not abstract strategy decks</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}

export default Hero;
