import MotionReveal from "../components/MotionReveal";
import {
  ArrowUpRight,
  BarChart3,
  CircleCheckBig,
  ClipboardCheck,
  Database,
  FileText,
  GitBranch,
  Settings2,
  Workflow,
} from "lucide-react";

function ServiceCard({ icon, title, description, bullets }) {
  const ServiceIcon = icon;

  return (
    <div className="h-full rounded-[24px] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] ring-1 ring-slate-200">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600 ring-1 ring-sky-100">
          <ServiceIcon className="h-5 w-5" />
        </div>
        <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-300" />
      </div>

      <h3 className="mt-6 text-xl font-semibold tracking-normal text-slate-950">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>

      <ul className="mt-6 space-y-3">
        {bullets.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
            <CircleCheckBig className="mt-1 h-4 w-4 shrink-0 text-sky-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FlowNode({ icon, label, detail }) {
  const NodeIcon = icon;

  return (
    <div className="flex items-start gap-3 rounded-2xl bg-white px-4 py-4 ring-1 ring-slate-200">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600 ring-1 ring-sky-100">
        <NodeIcon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-950">{label}</p>
        <p className="mt-1 text-xs leading-5 text-slate-500">{detail}</p>
      </div>
    </div>
  );
}

function ServicesVisual() {
  const steps = [
    {
      icon: Database,
      label: "Current systems",
      detail: "Tools, fields, reporting, handoffs, and manual work",
    },
    {
      icon: ClipboardCheck,
      label: "Gap map",
      detail: "What is unclear, duplicated, missing, or slowing decisions",
    },
    {
      icon: GitBranch,
      label: "Workflow plan",
      detail: "Future-state process, ownership, and implementation priorities",
    },
    {
      icon: BarChart3,
      label: "Visibility layer",
      detail: "Dashboards, operating views, and practical reporting outputs",
    },
  ];

  return (
    <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] ring-1 ring-slate-200">
      <div className="mb-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
          Consulting model
        </p>
        <p className="mt-2 text-sm font-medium text-slate-950">
          Diagnose, document, build, and support
        </p>
      </div>

      <div className="grid gap-3">
        {steps.map((step) => (
          <FlowNode key={step.label} {...step} />
        ))}
      </div>

      <div className="mt-5 rounded-2xl bg-sky-50 p-4 ring-1 ring-sky-100">
        <p className="text-sm font-medium text-slate-950">
          Every engagement ends with practical next steps
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          The work is scoped around usable deliverables: findings, roadmaps,
          cleaned-up systems, reporting views, and implementation guidance.
        </p>
      </div>
    </div>
  );
}

function Services() {
  const services = [
    {
      title: "Visibility audits",
      description:
        "A focused review of workflows, tools, reports, data inputs, and the places where leaders or operators cannot see what is happening.",
      icon: ClipboardCheck,
      bullets: ["Workflow and tool review", "Reporting gap inventory", "Practical recommendations"],
    },
    {
      title: "Systems & workflow blueprints",
      description:
        "A documented roadmap for how work should move, which tools should own which data, and what should be built first.",
      icon: Workflow,
      bullets: ["Current and future-state workflows", "Tool and field recommendations", "Implementation priorities"],
    },
    {
      title: "Dashboard & reporting buildouts",
      description:
        "Practical views for leadership, sales, operations, pipeline, account health, follow-up, and workflow tracking.",
      icon: BarChart3,
      bullets: ["Dashboard design", "Reporting logic", "Leadership-ready operating views"],
    },
    {
      title: "CRM / process cleanup sprints",
      description:
        "Cleanup work for object structure, stages, fields, activity tracking, process logic, and reporting consistency.",
      icon: Settings2,
      bullets: ["Field and stage cleanup", "Activity and handoff logic", "Cleaner reporting foundations"],
    },
    {
      title: "SMB operations starter work",
      description:
        "A lightweight systems review and roadmap for small businesses that need clearer tools and processes without heavy implementation.",
      icon: FileText,
      bullets: ["System-of-record review", "Simple metrics plan", "Automation fit assessment"],
    },
  ];

  return (
    <section id="services" className="border-t border-slate-200 bg-stone-50 py-24 md:py-32">
      <div className="mx-auto w-[min(1100px,92%)]">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <MotionReveal>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              Services
            </p>

            <h2 className="text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
              Tangible consulting work for messy operational systems
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Engagements are scoped around concrete outputs: what is broken,
              what should change, what to build, and how to make the system easier
              to operate.
            </p>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <ServicesVisual />
          </MotionReveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <MotionReveal key={service.title} delay={index * 0.04}>
              <ServiceCard {...service} />
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
