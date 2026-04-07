function Results() {
  const caseStudies = [
    {
      title: "Client-Facing Reporting Portal & Offer Dashboard",
      summary:
        "Built a structured customer-facing portal connected to Salesforce data using Apex, linking internal objects, fields, and key data points to a cleaner external experience.",
      outcome: [
        "Created daily visibility into team performance and offer activity",
        "Improved client transparency and strengthened negotiating position",
        "Replaced dated tracking methods with a scalable reporting design",
        "Built similar internal dashboards to reduce manual reporting effort",
      ],
    },
    {
      title: "Tri-System Data Reconciliation Model (ATS, VMS, Compliance)",
      summary:
        "Designed a reconciliation model for a Fortune 100 healthcare environment that compared records across an internal ATS, a VMS, and a compliance vendor portal.",
      outcome: [
        "Improved visibility into discrepancies and system deltas",
        "Created a more robust analytical model with rollup presentation",
        "Helped support cleaner auditing and self-reporting processes",
        "Provided leadership with clearer insight into operational variables",
      ],
    },
  ];

  return (
    <section id="results" className="bg-stone-50 py-20 md:py-28">
      <div className="mx-auto w-[min(1180px,92%)]">
        <div className="max-w-3xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
            Selected Results
          </p>

          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl">
            Work that improved visibility, execution, and client experience
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Practical solutions built for real operational constraints, not just
            presentation value.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {caseStudies.map((study, index) => (
            <article
              key={study.title}
              className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.05)] md:p-10"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-600">
                  Case Study {index + 1}
                </p>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              <h3 className="mt-5 max-w-xl text-2xl font-semibold tracking-[-0.03em] text-slate-950 md:text-3xl">
                {study.title}
              </h3>

              <p className="mt-5 text-base leading-7 text-slate-600">
                {study.summary}
              </p>

              <div className="mt-8 rounded-2xl bg-slate-50 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Outcomes
                </p>

                <ul className="mt-4 space-y-4">
                  {study.outcome.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-7 text-slate-700"
                    >
                      <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Results;