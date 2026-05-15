import MotionReveal from "../components/MotionReveal";
import {
  BarChart3,
  BriefcaseBusiness,
  CircleCheckBig,
  GitBranch,
  Store,
  TriangleAlert,
} from "lucide-react";

function AudienceCard({ icon, title, eyebrow, pains, outcomes }) {
  const AudienceIcon = icon;

  return (
    <div className="h-full rounded-[24px] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] ring-1 ring-slate-200">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-600">
            {eyebrow}
          </p>
          <h3 className="mt-4 text-2xl font-semibold tracking-normal text-slate-950">
            {title}
          </h3>
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600 ring-1 ring-sky-100">
          <AudienceIcon className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <div>
          <p className="text-sm font-semibold text-slate-950">Common friction</p>
          <ul className="mt-4 space-y-3">
            {pains.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                <TriangleAlert className="mt-1 h-4 w-4 shrink-0 text-slate-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-950">What improves</p>
          <ul className="mt-4 space-y-3">
            {outcomes.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                <CircleCheckBig className="mt-1 h-4 w-4 shrink-0 text-sky-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ShiftRow({ before, after, icon }) {
  const ShiftIcon = icon;

  return (
    <div className="grid gap-4 border-b border-slate-200 py-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
      <p className="text-base leading-7 text-slate-600">{before}</p>
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 text-sky-600 ring-1 ring-sky-100">
        <ShiftIcon className="h-4 w-4" />
      </div>
      <p className="text-base font-medium leading-7 text-slate-950">{after}</p>
    </div>
  );
}

function Problems() {
  const audiences = [
    {
      eyebrow: "Original focus",
      title: "Staffing & workforce vendors",
      icon: BriefcaseBusiness,
      pains: [
        "Unclear account health and pipeline status",
        "ATS, VMS, CRM, and compliance data spread across systems",
        "Manual client reporting and weak leadership dashboards",
      ],
      outcomes: [
        "Cleaner pipeline and account visibility",
        "Better handoffs between sales, recruiting, delivery, and operations",
        "Reporting views leaders and clients can trust",
      ],
    },
    {
      eyebrow: "Expanded support",
      title: "SMB owners & operators",
      icon: Store,
      pains: [
        "No clear system of record for daily work",
        "Too many spreadsheets and disconnected tools",
        "Unclear metrics and uncertainty around automation decisions",
      ],
      outcomes: [
        "Practical tool and workflow roadmap",
        "Simpler reporting around the numbers that matter",
        "Focused automation opportunities without enterprise complexity",
      ],
    },
  ];

  const shifts = [
    {
      before: "Scattered tools and inconsistent data",
      after: "Clear system relationships and ownership",
      icon: GitBranch,
    },
    {
      before: "Manual reporting and spreadsheet rollups",
      after: "Usable dashboards and repeatable reporting views",
      icon: BarChart3,
    },
    {
      before: "Reactive operations and unclear next steps",
      after: "Documented workflows and implementation priorities",
      icon: CircleCheckBig,
    },
  ];

  return (
    <section id="problems" className="py-24 md:py-32">
      <div className="mx-auto w-[min(1100px,92%)]">
        <MotionReveal className="max-w-3xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
            Who we help
          </p>

          <h2 className="text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
            For operators who need clearer systems, not another abstract strategy deck
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Visible Gap works where day-to-day execution, reporting, tools, and
            decisions no longer line up cleanly.
          </p>
        </MotionReveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {audiences.map((audience, index) => (
            <MotionReveal key={audience.title} delay={index * 0.06}>
              <AudienceCard {...audience} />
            </MotionReveal>
          ))}
        </div>

        <MotionReveal delay={0.08} className="mt-20">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                The operating shift
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-normal text-slate-950">
                From unclear work to visible execution
              </h3>
            </div>

            <div>
              {shifts.map((item) => (
                <ShiftRow key={item.before} {...item} />
              ))}
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

export default Problems;
