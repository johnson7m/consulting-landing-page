import MotionReveal from "../components/MotionReveal";
import {
  LayoutDashboard,
  ScanSearch,
  ArrowUpRight,
  Activity,
  CircleCheckBig,
  BarChart3,
  GitBranch,
} from "lucide-react";

function ResultHeader({ Icon, title, reverse = false }) {
  return (
    <div className="group">
      <div className="md:hidden">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 text-sky-600 ring-1 ring-sky-100 transition group-hover:bg-sky-100">
            <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
          </div>

          <h3 className="text-2xl font-semibold tracking-[-0.02em] text-slate-950">
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

        <h3 className="text-2xl font-semibold tracking-[-0.02em] text-slate-950">
          {title}
        </h3>

        {!reverse && (
          <div className="ml-3 h-px flex-1 bg-slate-200 transition-all duration-300 group-hover:bg-sky-300 group-hover:flex-[1.4]" />
        )}
      </div>
    </div>
  );
}

function OutcomeList({ items }) {
  return (
    <ul className="mt-8 space-y-4">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 border-b border-slate-200 pb-4 text-sm leading-7 text-slate-700"
        >
          <CircleCheckBig className="mt-1 h-4 w-4 shrink-0 text-sky-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function StatTile({ label, value, tone = "slate" }) {
  const toneClasses =
    tone === "sky"
      ? "bg-sky-50 ring-sky-100"
      : "bg-stone-50 ring-slate-200";

  return (
    <div className={`rounded-2xl p-4 ring-1 ${toneClasses}`}>
      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <p className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
        {value}
      </p>
    </div>
  );
}

function CompareRow({ left, right, status }) {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr_auto] items-center gap-3">
      <div className="rounded-2xl bg-white px-4 py-3 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
        {left}
      </div>

      <ArrowUpRight className="h-4 w-4 text-sky-500" />

      <div className="rounded-2xl bg-white px-4 py-3 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
        {right}
      </div>

      <span
        className={`rounded-full px-3 py-1 text-xs font-medium ${
          status === "Matched"
            ? "bg-sky-50 text-sky-700 ring-1 ring-sky-100"
            : status === "Delta"
            ? "bg-stone-100 text-slate-700 ring-1 ring-slate-200"
            : "bg-sky-50 text-sky-700 ring-1 ring-sky-100"
        }`}
      >
        {status}
      </span>
    </div>
  );
}

function PortalDashboardMock() {
  return (
    <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] ring-1 ring-slate-200">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            Client Portal View
          </p>
          <p className="mt-2 text-sm font-medium text-slate-950">
            Offer dashboard snapshot
          </p>
        </div>

        <div className="inline-flex items-center gap-2 text-slate-700">
          <LayoutDashboard className="h-4 w-4 text-sky-600" />
          <div className="h-3 w-3 rounded-full bg-sky-500" />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <StatTile label="Accepted" value="18" tone="sky" />
        <StatTile label="Pending" value="11" tone="slate" />
        <StatTile label="Declined" value="5" tone="slate" />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl bg-stone-50 p-4 ring-1 ring-slate-200">
          <div className="mb-4 flex items-center gap-2 text-slate-700">
            <BarChart3 className="h-4 w-4 text-sky-600" />
            <span className="text-sm font-medium">Workstream mix</span>
          </div>

          <div className="flex h-28 items-end gap-2">
            {[52, 68, 35, 74, 58].map((n, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-lg bg-sky-100"
                style={{ height: `${n}%` }}
              />
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-stone-50 p-4 ring-1 ring-slate-200">
          <div className="mb-3 h-2 w-24 rounded-full bg-slate-300" />
          <div className="space-y-3">
            {[72, 84, 66, 58].map((w, i) => (
              <div key={i} className="space-y-2">
                <div className="h-2 w-16 rounded-full bg-slate-200" />
                <div
                  className="h-3 rounded-full bg-slate-200"
                  style={{ width: `${w}%` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ReconciliationMock() {
  return (
    <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] ring-1 ring-slate-200">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            Reconciliation Model
          </p>
          <p className="mt-2 text-sm font-medium text-slate-950">
            Tri-system comparison view
          </p>
        </div>

        <div className="inline-flex items-center gap-2 text-slate-700">
          <ScanSearch className="h-4 w-4 text-sky-600" />
          <div className="h-3 w-3 rounded-full bg-sky-500" />
        </div>
      </div>

      <div className="grid gap-4">
        <div className="rounded-2xl bg-stone-50 p-4 ring-1 ring-slate-200">
          <div className="mb-4 flex items-center gap-2 text-slate-700">
            <GitBranch className="h-4 w-4 text-sky-600" />
            <span className="text-sm font-medium">Source alignment</span>
          </div>

          <div className="grid gap-3">
            <CompareRow left="Fieldglass" right="eRecruit" status="Matched" />
            <CompareRow left="eRecruit" right="Compliance" status="Delta" />
            <CompareRow left="Monthly Rollup" right="Audit Output" status="Ready" />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <StatTile label="Matched" value="84%" tone="sky" />
          <StatTile label="Delta Items" value="12" tone="slate" />
          <StatTile label="Review Ready" value="Yes" tone="slate" />
        </div>
      </div>
    </div>
  );
}

function ResultBlock({ study, index }) {
  const Icon = study.icon;

  return (
    <MotionReveal delay={index * 0.08}>
      <div className="space-y-8 lg:hidden">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-600">
            {study.label}
          </p>

          <div className="mt-4">
            <ResultHeader Icon={Icon} title={study.title} reverse={false} />
          </div>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            {study.summary}
          </p>

          <OutcomeList items={study.outcome} />
        </div>

        <div>{study.visual}</div>
      </div>

      <div className="hidden gap-12 lg:grid lg:grid-cols-2 lg:items-center">
        {!study.reverse ? (
          <>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-600">
                {study.label}
              </p>

              <div className="mt-4">
                <ResultHeader Icon={Icon} title={study.title} reverse={false} />
              </div>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                {study.summary}
              </p>

              <OutcomeList items={study.outcome} />
            </div>

            <div>{study.visual}</div>
          </>
        ) : (
          <>
            <div>{study.visual}</div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-600">
                {study.label}
              </p>

              <div className="mt-4">
                <ResultHeader Icon={Icon} title={study.title} reverse />
              </div>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                {study.summary}
              </p>

              <OutcomeList items={study.outcome} />
            </div>
          </>
        )}
      </div>
    </MotionReveal>
  );
}

function Results() {
  const caseStudies = [
    {
      label: "Case Study 01",
      title: "Client-Facing Reporting Portal & Offer Dashboard",
      summary:
        "Built a structured customer-facing portal connected to Salesforce data using Apex, linking internal objects, fields, and key data points to a cleaner external experience.",
      outcome: [
        "Created daily visibility into team performance and offer activity",
        "Improved client transparency and strengthened negotiating position",
        "Replaced dated tracking methods with a scalable reporting design",
      ],
      icon: LayoutDashboard,
      visual: <PortalDashboardMock />,
    },
    {
      label: "Case Study 02",
      title: "Tri-System Data Reconciliation Model",
      summary:
        "Designed a reconciliation model for a Fortune 100 healthcare environment that compared records across an internal ATS, a VMS, and a compliance vendor portal.",
      outcome: [
        "Improved visibility into discrepancies and system deltas",
        "Created a more robust analytical model with rollup presentation",
        "Supported cleaner auditing and self-reporting processes",
      ],
      icon: ScanSearch,
      visual: <ReconciliationMock />,
      reverse: true,
    },
  ];

  return (
    <section id="results" className="py-24 md:py-32">
      <div className="mx-auto w-[min(1100px,92%)]">
        <MotionReveal className="max-w-3xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
            Selected Results
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
            Work that improved visibility, execution, and client experience
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Practical solutions built for real operational constraints, not just
            presentation value.
          </p>
        </MotionReveal>

        <div className="mt-20 space-y-28">
          {caseStudies.map((study, index) => (
            <ResultBlock key={study.title} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Results;