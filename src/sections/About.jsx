import MotionReveal from "../components/MotionReveal";

function About() {
  return (
    <section id="about" className="bg-transparent py-24 md:py-32">
      <div className="mx-auto w-[min(1100px,92%)]">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <MotionReveal>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              Our approach
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
              Built around real operational problems, not abstract transformation
            </h2>
          </MotionReveal>

          <MotionReveal delay={0.08} className="space-y-8">
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Placeholder Co focuses on the problems that sit between systems,
              workflows, and execution. That means understanding how staffing teams
              actually work, where visibility breaks down, and where manual friction
              starts to compound.
            </p>

            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              The goal is simple: reduce noise, improve clarity, and build
              solutions that make the business easier to operate for internal
              stakeholders and external clients alike.
            </p>

            <div className="grid gap-8 pt-4 sm:grid-cols-2">
              <div className="border-t border-slate-200 pt-5">
                <p className="text-sm font-medium text-slate-950">Clarity over complexity</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Solutions should make the business easier to run, not harder to maintain.
                </p>
              </div>

              <div className="border-t border-slate-200 pt-5">
                <p className="text-sm font-medium text-slate-950">Built for real workflows</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Systems and reporting should reflect how teams actually operate day to day.
                </p>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}

export default About;