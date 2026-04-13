import MotionReveal from "../components/MotionReveal";

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
      <div className="mx-auto w-[min(1100px,92%)]">
        <MotionReveal className="max-w-3xl">
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
        </MotionReveal>

        <div className="mt-16 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {problems.map((item, index) => (
            <MotionReveal key={item} delay={index * 0.05}>
              <div className="border-b border-slate-200 pb-6">
                <p className="text-base leading-7 text-slate-700">{item}</p>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Problems;