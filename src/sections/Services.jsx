import MotionReveal from "../components/MotionReveal";
import {
  BarChart3,
  Workflow,
  ShieldCheck,
  ArrowUpRight,
  Database,
  FileSpreadsheet,
  MonitorCheck,
} from "lucide-react";

function ServiceHeader({ Icon, title, reverse = false }) {
  return (
    <div className="group">
      <div className="md:hidden">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 text-sky-600 ring-1 ring-sky-100 transition group-hover:bg-sky-100">
            <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
          </div>

          <h3 className="text-2xl font-semibold tracking-[-0.02em] text-slate-950 transition group-hover:translate-x-[1px]">
            {title}
          </h3>
        </div>

        <div className="mt-4 h-px w-20 bg-slate-200 transition-all duration-300 group-hover:w-28 group-hover:bg-sky-300" />
      </div>

      <div className="hidden items-center gap-3 md:flex">
        {reverse && (
          <div className="mr-3 h-px flex-1 bg-slate-200 transition-all duration-300 group-hover:bg-sky-300 group-hover:flex-[1.4]" />
        )}

        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 text-sky-600 ring-1 ring-sky-100 transition group-hover:bg-sky-100">
          <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
        </div>

        <h3 className="text-2xl font-semibold tracking-[-0.02em] text-slate-950 transition group-hover:translate-x-[1px]">
          {title}
        </h3>

        {!reverse && (
          <div className="ml-3 h-px flex-1 bg-slate-200 transition-all duration-300 group-hover:bg-sky-300 group-hover:flex-[1.4]" />
        )}
      </div>
    </div>
  );
}

function FlowNode({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 ring-1 ring-slate-200">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600 ring-1 ring-sky-100">
        <Icon className="h-4 w-4" />
      </div>
      <span className="text-sm font-medium text-slate-700">{label}</span>
    </div>
  );
}

function ConnectorLabel({ text }) {
  return (
    <div className="flex items-center justify-center">
      <span className="rounded-full bg-stone-50 px-3 py-1 text-xs font-medium text-slate-500 ring-1 ring-slate-200">
        {text}
      </span>
    </div>
  );
}

function VisibilityFlowMock() {
  return (
    <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] ring-1 ring-slate-200">
      <div className="mb-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
          Visibility Architecture
        </p>
        <p className="mt-2 text-sm font-medium text-slate-950">
          Source data to reporting view
        </p>
      </div>

      <div className="grid gap-4">
        <FlowNode icon={Database} label="Operational Source Data" />
        <ConnectorLabel text="Normalize + Structure" />
        <FlowNode icon={FileSpreadsheet} label="Reporting Layer" />
        <ConnectorLabel text="Surface Insights" />
        <FlowNode icon={MonitorCheck} label="Leadership & Client Visibility" />
      </div>

      <div className="mt-5 rounded-2xl bg-sky-50 p-4 ring-1 ring-sky-100">
        <p className="text-sm font-medium text-slate-950">
          Better visibility starts with cleaner inputs
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Turn fragmented operational data into clearer reporting views that leadership
          and clients can actually use.
        </p>
      </div>
    </div>
  );
}

function AlignmentFlowMock() {
  return (
    <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] ring-1 ring-slate-200">
      <div className="mb-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
          Systems Alignment
        </p>
        <p className="mt-2 text-sm font-medium text-slate-950">
          Handoffs between core platforms
        </p>
      </div>

      <div className="grid gap-4">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <FlowNode icon={Database} label="ATS" />
          <ArrowUpRight className="h-4 w-4 text-sky-500" />
          <FlowNode icon={Workflow} label="Workflow Layer" />
        </div>

        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <FlowNode icon={Database} label="VMS" />
          <ArrowUpRight className="h-4 w-4 text-sky-500" />
          <FlowNode icon={BarChart3} label="Reporting Output" />
        </div>

        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <FlowNode icon={ShieldCheck} label="Compliance" />
          <ArrowUpRight className="h-4 w-4 text-sky-500" />
          <FlowNode icon={MonitorCheck} label="Client-Facing Experience" />
        </div>
      </div>

      <div className="mt-5 rounded-2xl bg-stone-50 p-4 ring-1 ring-slate-200">
        <p className="text-sm font-medium text-slate-950">Cleaner system relationships</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Reduce friction where teams lose time: data handoffs, inconsistent field logic,
          and disconnected workflows.
        </p>
      </div>
    </div>
  );
}

function AuditFlowMock() {
  return (
    <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] ring-1 ring-slate-200">
      <div className="mb-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
          Audit Model
        </p>
        <p className="mt-2 text-sm font-medium text-slate-950">
          Compare, flag, and roll up discrepancies
        </p>
      </div>

      <div className="space-y-3">
        {[
          ["System A", "System B", "Match / Delta"],
          ["Monthly Input", "Audit Layer", "Review"],
          ["Exception List", "Rollup View", "Action"],
        ].map(([left, right, status]) => (
          <div
            key={`${left}-${right}`}
            className="grid grid-cols-[1fr_auto_1fr_auto] items-center gap-3"
          >
            <div className="rounded-2xl bg-stone-50 px-4 py-3 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
              {left}
            </div>
            <ArrowUpRight className="h-4 w-4 text-sky-500" />
            <div className="rounded-2xl bg-stone-50 px-4 py-3 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
              {right}
            </div>
            <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-sky-100">
              {status}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl bg-stone-50 p-4 ring-1 ring-slate-200">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Compare</p>
          <p className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
            3 Sources
          </p>
        </div>
        <div className="rounded-2xl bg-sky-50 p-4 ring-1 ring-sky-100">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Flag</p>
          <p className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
            Deltas
          </p>
        </div>
        <div className="rounded-2xl bg-stone-50 p-4 ring-1 ring-slate-200">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Roll up</p>
          <p className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
            Output
          </p>
        </div>
      </div>
    </div>
  );
}

function ServiceBlock({ section, index }) {
  const Icon = section.icon;

  return (
    <MotionReveal delay={0.08 + index * 0.04}>
      <div className="space-y-8 lg:hidden">
        <div>
          <ServiceHeader Icon={Icon} title={section.title} reverse={false} />
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            {section.description}
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm font-medium text-sky-600">
            <span>Built for clarity and execution</span>
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        <div>{section.visual}</div>
      </div>

      <div className="hidden gap-12 lg:grid lg:grid-cols-2 lg:items-center">
        {!section.reverse ? (
          <>
            <div>
              <ServiceHeader Icon={Icon} title={section.title} reverse={false} />
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                {section.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-sky-600">
                <span>Built for clarity and execution</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>

            <div>{section.visual}</div>
          </>
        ) : (
          <>
            <div>{section.visual}</div>

            <div>
              <ServiceHeader Icon={Icon} title={section.title} reverse />
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                {section.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-sky-600">
                <span>Built for clarity and execution</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </>
        )}
      </div>
    </MotionReveal>
  );
}

function Services() {
  const sections = [
    {
      title: "Operations Visibility & Reporting",
      description:
        "Build dashboards and reporting structures that give leadership and clients a clearer view into performance and activity.",
      icon: BarChart3,
      visual: <VisibilityFlowMock />,
    },
    {
      title: "Business Systems Alignment",
      description:
        "Align ATS, VMS, and compliance systems so workflows reflect how your team actually operates day to day.",
      icon: Workflow,
      visual: <AlignmentFlowMock />,
      reverse: true,
    },
    {
      title: "Data Reconciliation & Audit Support",
      description:
        "Identify discrepancies across systems and create structured models for ongoing visibility and audit readiness.",
      icon: ShieldCheck,
      visual: <AuditFlowMock />,
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
          {sections.map((section, index) => (
            <ServiceBlock key={section.title} section={section} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;