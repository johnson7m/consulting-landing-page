function Problems() {
  const problems = [
    "Reporting spread across ATS, VMS, and compliance systems",
    "Manual tracking and spreadsheet-heavy workflows",
    "Limited visibility for leadership or end clients",
    "Inconsistent data between systems",
    "Client reporting that feels outdated or difficult to manage",
    "Operational processes that do not reflect how teams actually work",
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto w-[min(1200px,92%)]">
        <div className="max-w-3xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
            Built for teams dealing with
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
            Operational complexity that makes visibility and execution harder than it should be
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            We work best where systems, reporting, and day-to-day execution are
            no longer lining up cleanly.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {problems.map((item) => (
            <div key={item} className="rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm leading-7 text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Problems;