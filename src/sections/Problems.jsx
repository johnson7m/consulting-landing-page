function Problems() {
  const problems = [
    "Reporting spread across ATS, VMS, and compliance systems",
    "Manual tracking and spreadsheet-heavy workflows",
    "Limited visibility for leadership or end clients",
    "Inconsistent data between systems",
    "Client reporting that feels outdated or difficult to manage",
  ];

  return (
    <section className="bg-neutral-50 py-20 md:py-24">
      <div className="mx-auto w-[min(1120px,92%)]">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Built for teams dealing with
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Operational complexity that makes visibility and execution harder than it should be
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {problems.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-neutral-200 bg-white p-5 text-sm text-neutral-700"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Problems;