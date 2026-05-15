import MotionReveal from "../components/MotionReveal";
import {
  BarChart3,
  CircleCheckBig,
  FileSpreadsheet,
  GitBranch,
  LayoutDashboard,
  ScanSearch,
  UsersRound,
} from "lucide-react";

function OutcomeCard({ icon, title, context, outcomes }) {
  const OutcomeIcon = icon;

  return (
    <div className="h-full rounded-[24px] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] ring-1 ring-slate-200">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-600 ring-1 ring-sky-100">
        <OutcomeIcon className="h-5 w-5" />
      </div>

      <h3 className="mt-6 text-xl font-semibold tracking-normal text-slate-950">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{context}</p>

      <ul className="mt-6 space-y-4">
        {outcomes.map((item) => (
          <li
            key={item}
            className="flex gap-3 border-t border-slate-200 pt-4 text-sm leading-6 text-slate-700"
          >
            <CircleCheckBig className="mt-1 h-4 w-4 shrink-0 text-sky-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DashboardMock() {
  const rows = [
    ["Pipeline health", "Visible", "88%"],
    ["Manual rollups", "Reduced", "Low"],
    ["Follow-up status", "Tracked", "Daily"],
  ];

  return (
    <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] ring-1 ring-slate-200">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            Outcome view
          </p>
          <p className="mt-2 text-sm font-medium text-slate-950">
            What better visibility makes easier to manage
          </p>
        </div>
        <LayoutDashboard className="h-5 w-5 text-sky-600" />
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl bg-sky-50 p-4 ring-1 ring-sky-100">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Leaders</p>
          <p className="mt-3 text-2xl font-semibold text-slate-950">Clearer</p>
        </div>
        <div className="rounded-2xl bg-stone-50 p-4 ring-1 ring-slate-200">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Teams</p>
          <p className="mt-3 text-2xl font-semibold text-slate-950">Aligned</p>
        </div>
        <div className="rounded-2xl bg-stone-50 p-4 ring-1 ring-slate-200">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Reports</p>
          <p className="mt-3 text-2xl font-semibold text-slate-950">Usable</p>
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-2xl ring-1 ring-slate-200">
        {rows.map(([metric, status, value]) => (
          <div
            key={metric}
            className="grid grid-cols-[1fr_auto_auto] gap-4 border-b border-slate-200 bg-stone-50 px-4 py-3 last:border-b-0"
          >
            <p className="text-sm font-medium text-slate-800">{metric}</p>
            <p className="text-sm text-slate-500">{status}</p>
            <p className="text-sm font-semibold text-slate-950">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Results() {
  const outcomes = [
    {
      title: "Leadership-ready dashboards",
      context:
        "Operational reporting views designed around the questions leaders actually ask each week.",
      outcomes: [
        "Reduced dependence on manual spreadsheet rollups",
        "Clearer pipeline, activity, account, and workflow status",
        "More consistent reporting conversations across teams",
      ],
      icon: BarChart3,
    },
    {
      title: "Cleaner CRM and process visibility",
      context:
        "CRM and operating-system cleanup that makes stages, fields, activity, and ownership easier to trust.",
      outcomes: [
        "Cleaner stage and field logic",
        "Better handoffs between sales, recruiting, service, and operations",
        "Improved visibility into follow-up and stuck work",
      ],
      icon: GitBranch,
    },
    {
      title: "Practical audit and reconciliation views",
      context:
        "Structured comparison and exception views for teams managing data across multiple operational tools.",
      outcomes: [
        "Clearer discrepancy review between systems",
        "More usable source-of-truth conversations",
        "Better operating rhythm for recurring data checks",
      ],
      icon: ScanSearch,
    },
  ];

  return (
    <section id="results" className="py-24 md:py-32">
      <div className="mx-auto w-[min(1100px,92%)]">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <MotionReveal className="max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              Results
            </p>

            <h2 className="text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
              Practical outcomes without inflated claims
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Anonymized examples from operational visibility work: cleaner
              reporting, clearer handoffs, better dashboards, and systems that
              are easier to manage.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="border-t border-slate-200 pt-5">
                <div className="flex items-center gap-2 text-sky-600">
                  <FileSpreadsheet className="h-4 w-4" />
                  <p className="text-sm font-medium text-slate-950">
                    Less manual reporting
                  </p>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Replace repeated rollups with views teams can maintain.
                </p>
              </div>

              <div className="border-t border-slate-200 pt-5">
                <div className="flex items-center gap-2 text-sky-600">
                  <UsersRound className="h-4 w-4" />
                  <p className="text-sm font-medium text-slate-950">
                    Better operating conversations
                  </p>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Give leaders and operators the same source of context.
                </p>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <DashboardMock />
          </MotionReveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {outcomes.map((outcome, index) => (
            <MotionReveal key={outcome.title} delay={index * 0.05}>
              <OutcomeCard {...outcome} />
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Results;
