import MotionReveal from "../components/MotionReveal";
import {
  BarChart3,
  CircleCheckBig,
  ClipboardCheck,
  FileText,
  LifeBuoy,
  Settings2,
  Store,
  Workflow,
} from "lucide-react";

function PriceCard({ icon, title, price, label, description, bestFor }) {
  const PriceIcon = icon;

  return (
    <div className="flex h-full flex-col rounded-[24px] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] ring-1 ring-slate-200">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600 ring-1 ring-sky-100">
          <PriceIcon className="h-5 w-5" />
        </div>
        <span className="rounded-full bg-stone-50 px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200">
          {label}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-semibold tracking-normal text-slate-950">
        {title}
      </h3>
      <p className="mt-3 text-2xl font-semibold text-slate-950">{price}</p>
      <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>

      <div className="mt-6 border-t border-slate-200 pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Best for
        </p>
        <p className="mt-3 text-sm leading-6 text-slate-700">{bestFor}</p>
      </div>
    </div>
  );
}

function ScopeNote() {
  const items = [
    "System complexity and number of tools involved",
    "Depth of workflow documentation or implementation support",
    "Dashboard/reporting build requirements and urgency",
  ];

  return (
    <div className="rounded-[24px] bg-slate-950 p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
      <div className="flex items-center gap-2 text-sky-300">
        <CircleCheckBig className="h-4 w-4" />
        <p className="text-sm font-medium text-white">Transparent, scope-aware pricing</p>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-300">
        Final pricing depends on the scope, system complexity, urgency, and
        implementation depth. The ranges below are intended to help qualified
        prospects understand the likely level of investment before reaching out.
      </p>
      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <div key={item} className="border-t border-white/10 pt-3">
            <p className="text-sm leading-6 text-slate-200">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Pricing() {
  const deliverables = [
    {
      title: "Visibility Audit",
      price: "$750-$1,500",
      label: "Typical range",
      description:
        "A focused review of workflows, tools, reporting gaps, and operational visibility issues.",
      bestFor: "Teams that know something is unclear but need a structured diagnosis.",
      icon: ClipboardCheck,
    },
    {
      title: "Systems & Workflow Blueprint",
      price: "$1,500-$3,500",
      label: "Typical range",
      description:
        "A practical roadmap documenting current-state gaps, future-state workflows, recommended tools, dashboards, and priorities.",
      bestFor: "Operators who need a clear plan before cleanup, automation, or reporting work.",
      icon: Workflow,
    },
    {
      title: "Dashboard / Reporting Buildout",
      price: "$2,500-$7,500+",
      label: "Project-based",
      description:
        "Design and build practical dashboards or reporting views for leadership, sales, operations, pipeline, account health, or workflow tracking.",
      bestFor: "Teams that need usable reporting views instead of manual weekly rollups.",
      icon: BarChart3,
    },
    {
      title: "CRM / Process Cleanup Sprint",
      price: "$2,500-$6,000+",
      label: "Project-based",
      description:
        "Clean up object structure, stages, fields, activity tracking, reporting logic, and process visibility inside a CRM or operating system.",
      bestFor: "Teams whose CRM or operating tool no longer reflects how work actually moves.",
      icon: Settings2,
    },
    {
      title: "SMB Operations Starter Package",
      price: "$1,500-$3,000",
      label: "Typical range",
      description:
        "Lightweight systems review and roadmap for small businesses that need clearer tools, processes, and reporting without enterprise complexity.",
      bestFor: "Owners and operators outgrowing spreadsheets and disconnected tools.",
      icon: Store,
    },
    {
      title: "Ongoing Advisory / Fractional Systems Support",
      price: "Starting at $1,500/mo",
      label: "Monthly",
      description:
        "Monthly support for implementation guidance, reporting improvements, workflow optimization, and systems decision-making.",
      bestFor: "Teams that need steady systems guidance without hiring a full-time operator.",
      icon: LifeBuoy,
    },
  ];

  return (
    <section id="pricing" className="border-t border-slate-200 bg-stone-50 py-24 md:py-32">
      <div className="mx-auto w-[min(1100px,92%)]">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <MotionReveal className="max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              Deliverables & pricing
            </p>

            <h2 className="text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
              Clear project options before the first call
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Engagements are priced around usable outputs, not vague consulting
              time. Start with the smallest deliverable that creates clarity, then
              build deeper where it makes sense.
            </p>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <ScopeNote />
          </MotionReveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item, index) => (
            <MotionReveal key={item.title} delay={index * 0.04}>
              <PriceCard {...item} />
            </MotionReveal>
          ))}
        </div>

        <MotionReveal delay={0.1} className="mt-12">
          <div className="flex flex-col gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-950">
                Not sure where to start?
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Most teams begin with a Visibility Audit or Systems & Workflow Blueprint.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Request a Visibility Audit
            </a>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

export default Pricing;
