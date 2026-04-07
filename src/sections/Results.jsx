function Results() {
  const caseStudies = [
    {
      title: "Client Portal & Offer Dashboard",
      summary:
        "Built a structured customer-facing portal connected to Salesforce data using Apex, linking internal objects, fields, and key data points to a cleaner external experience.",
      outcome: [
        "Created daily visibility into team performance and offer activity",
        "Improved client transparency and strengthened negotiating position",
        "Replaced dated tracking methods with a scalable reporting design",
        "Built similar internal dashboards to reduce manual reporting effort"
      ],
    },
    {
      title: "Tri-System Data Reconciliation Model",
      summary:
        "Designed a reconciliation model for a Fortune 100 healthcare environment that compared records across an internal ATS, a VMS, and a compliance vendor portal.",
      outcome: [
        "Improved visibility into discrepancies and system deltas",
        "Created a more robust analytical model with rollup presentation",
        "Helped support cleaner auditing and self-reporting processes",
        "Provided leadership with clearer insight into operational variables"
      ],
    },
  ];

  return (
    <section id="results" className="bg-white py-20 md:py-24">
      <div className="mx-auto w-[min(1120px,92%)]">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
          Results
        </p>

        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          Selected work that improved visibility, execution, and client experience
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-600">
          We focus on practical deliverables that solve real business problems,
          whether that means better reporting, cleaner systems logic, or a stronger
          customer-facing experience.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8"
            >
              <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">
                {study.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-neutral-600">
                {study.summary}
              </p>

              <div className="mt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Outcomes
                </p>

                <ul className="mt-4 space-y-3">
                  {study.outcome.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-neutral-700"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-neutral-900" />
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