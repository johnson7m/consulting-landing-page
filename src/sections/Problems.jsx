function Problems() {
  const problems = [
    "Reporting spread across ATS, VMS, and compliance systems",
    "Manual tracking and spreadsheet-heavy workflows",
    "Limited visibility for leadership or end clients",
    "Inconsistent data between systems",
    "Client reporting that feels outdated or difficult to manage",
    "Operational processes that don’t match how teams actually work",
  ];

  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto w-[min(1180px,92%)]">
        <div className="max-w-3xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
            Built for teams dealing with
          </p>

          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl">
            Operational complexity that makes visibility and execution harder than it should be
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            We work best where systems, reporting, and day-to-day operations are
            no longer lining up cleanly.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {problems.map((item) => (
            <div
              key={item}
              className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_1px_0_rgba(15,23,42,0.04)]"
            >
              <p className="text-sm leading-7 text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Problems;