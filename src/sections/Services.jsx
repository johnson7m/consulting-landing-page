import MotionReveal from "../components/MotionReveal";
import {
  BarChart3,
  Workflow,
  ShieldCheck,
  ArrowUpRight,
  Activity,
  LayoutPanelTop,
} from "lucide-react";

function Services() {
  const sections = [
    {
      title: "Operations Visibility & Reporting",
      description:
        "Build dashboards and reporting structures that give leadership and clients a clearer view into performance and activity.",
      icon: BarChart3,
      visual: <ReportingMock />,
    },
    {
      title: "Business Systems Alignment",
      description:
        "Align ATS, VMS, and compliance systems so workflows reflect how your team actually operates day to day.",
      icon: Workflow,
      visual: <WorkflowMock />,
      reverse: true,
    },
    {
      title: "Data Reconciliation & Audit Support",
      description:
        "Identify discrepancies across systems and create structured models for ongoing visibility and audit readiness.",
      icon: ShieldCheck,
      visual: <AuditMock />,
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto w-[min(1100px,92%)]">
        <MotionReveal className="max-w-3xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
            Services
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
            Focused on the operational realities of staffing teams
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            We help bring clarity to reporting, align disconnected systems,
            and reduce the operational friction that slows teams down.
          </p>
        </MotionReveal>

        <div className="mt-20 space-y-28">
          {sections.map((section, index) => {
            const Icon = section.icon;

            return (
              <MotionReveal
                key={section.title}
                delay={0.08 + index * 0.04}
                className="grid gap-12 lg:grid-cols-2 lg:items-center"
              >
                <div className={section.reverse ? "order-2 lg:order-2" : ""}>
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-2xl font-semibold tracking-[-0.02em] text-slate-950">
                    {section.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                    {section.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-sky-600">
                    <span>Built for clarity and execution</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <div className={section.reverse ? "order-1 lg:order-1" : ""}>
                  {section.visual}
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ReportingMock() {
  return (
    <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] ring-1 ring-slate-200">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            Reporting Snapshot
          </p>
          <p className="mt-2 text-sm font-medium text-slate-950">
            Daily visibility dashboard
          </p>
        </div>
        <div className="h-3 w-3 rounded-full bg-sky-500" />
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <MetricTile label="Open Items" value="42" />
        <MetricTile label="At Risk" value="7" />
        <MetricTile label="Accepted" value="18" />
      </div>

      <div className="mt-4 rounded-2xl bg-stone-50 p-4 ring-1 ring-slate-200">
        <div className="mb-4 flex items-center gap-2 text-slate-700">
          <BarChart3 className="h-4 w-4 text-sky-600" />
          <span className="text-sm font-medium">Performance Trend</span>
        </div>

        <div className="flex h-28 items-end gap-2">
          {[42, 55, 38, 67, 74, 61, 82].map((n, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-lg bg-sky-100"
              style={{ height: `${n}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkflowMock() {
  return (
    <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] ring-1 ring-slate-200">
      <div className="mb-5 flex items-center gap-2 text-slate-700">
        <Workflow className="h-4 w-4 text-sky-600" />
        <span className="text-sm font-medium">Systems Flow</span>
      </div>

      <div className="grid gap-4">
        <WorkflowRow left="ATS" right="Visibility Layer" />
        <WorkflowRow left="VMS" right="Reporting Model" />
        <WorkflowRow left="Compliance" right="Audit Output" />
      </div>

      <div className="mt-5 rounded-2xl bg-sky-50 p-4 ring-1 ring-sky-100">
        <p className="text-sm font-medium text-slate-950">Cleaner handoffs</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Reduce manual reconciliation between systems and make reporting more reliable.
        </p>
      </div>
    </div>
  );
}

function AuditMock() {
  return (
    <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] ring-1 ring-slate-200">
      <div className="mb-5 flex items-center gap-2 text-slate-700">
        <ShieldCheck className="h-4 w-4 text-sky-600" />
        <span className="text-sm font-medium">Audit View</span>
      </div>

      <div className="space-y-3">
        {[
          ["FG vs ATS", "Matched"],
          ["ATS vs Compliance", "Delta found"],
          ["Monthly Rollup", "Ready"],
        ].map(([label, status]) => (
          <div
            key={label}
            className="flex items-center justify-between rounded-2xl bg-stone-50 px-4 py-3 ring-1 ring-slate-200"
          >
            <span className="text-sm text-slate-700">{label}</span>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-950">
              <Activity className="h-4 w-4 text-sky-600" />
              {status}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-2xl bg-stone-50 p-4 ring-1 ring-slate-200">
        <div className="mb-3 flex items-center gap-2 text-slate-700">
          <LayoutPanelTop className="h-4 w-4 text-sky-600" />
          <span className="text-sm font-medium">Summary Rollup</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <div className="h-10 rounded-lg bg-slate-200" />
          <div className="h-10 rounded-lg bg-slate-200" />
          <div className="h-10 rounded-lg bg-slate-200" />
          <div className="h-10 rounded-lg bg-slate-200" />
        </div>
      </div>
    </div>
  );
}

function MetricTile({ label, value }) {
  return (
    <div className="rounded-2xl bg-stone-50 p-4 ring-1 ring-slate-200">
      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <p className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
        {value}
      </p>
    </div>
  );
}

function WorkflowRow({ left, right }) {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
      <div className="rounded-2xl bg-stone-50 px-4 py-3 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
        {left}
      </div>
      <ArrowUpRight className="h-4 w-4 text-sky-500" />
      <div className="rounded-2xl bg-stone-50 px-4 py-3 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
        {right}
      </div>
    </div>
  );
}

export default Services;