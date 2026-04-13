import MotionReveal from "../components/MotionReveal";

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
            <MotionReveal
              key={study.title}
              delay={index * 0.08}
              className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center"
            >
              <div className={index % 2 === 1 ? "order-2 lg:order-1" : ""}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-600">
                  {study.label}
                </p>

                <h3 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
                  {study.title}
                </h3>

                <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
                  {study.summary}
                </p>

                <ul className="mt-8 space-y-4">
                  {study.outcome.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 border-b border-slate-200 pb-4 text-sm leading-7 text-slate-700"
                    >
                      <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`${
                  index % 2 === 1 ? "order-1 lg:order-2" : ""
                } rounded-[28px] bg-slate-100 p-8 shadow-inner`}
              >
                <div className="rounded-[22px] bg-white p-5 ring-1 ring-slate-200">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <div className="h-2 w-20 rounded-full bg-slate-300" />
                      <div className="mt-3 h-3 w-32 rounded-full bg-slate-200" />
                    </div>
                    <div className="h-3 w-3 rounded-full bg-blue-400" />
                  </div>

                  <div className="grid gap-3">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-16 rounded-xl bg-slate-100" />
                      <div className="h-16 rounded-xl bg-slate-100" />
                      <div className="h-16 rounded-xl bg-slate-100" />
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-4">
                      <div className="mb-3 h-2 w-24 rounded-full bg-slate-200" />
                      <div className="space-y-2">
                        <div className="h-3 w-full rounded-full bg-slate-200" />
                        <div className="h-3 w-5/6 rounded-full bg-slate-200" />
                        <div className="h-3 w-2/3 rounded-full bg-slate-200" />
                      </div>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-4">
                      <div className="mb-3 h-2 w-16 rounded-full bg-slate-200" />
                      <div className="grid grid-cols-4 gap-2">
                        <div className="h-10 rounded-lg bg-slate-200" />
                        <div className="h-10 rounded-lg bg-slate-200" />
                        <div className="h-10 rounded-lg bg-slate-200" />
                        <div className="h-10 rounded-lg bg-slate-200" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Results;