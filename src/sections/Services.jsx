import MotionReveal from "../components/MotionReveal";

function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto w-[min(1100px,92%)]">
        <MotionReveal className="max-w-3xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
            Services
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
            Focused on the operational realities of staffing teams
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            We help bring clarity to reporting, align disconnected systems,
            and reduce the operational friction that slows teams down.
          </p>
        </MotionReveal>

        <div className="mt-20 space-y-28">
          <MotionReveal delay={0.08} className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.02em] text-slate-950">
                Operations Visibility & Reporting
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Build dashboards and reporting structures that give leadership
                and clients a clearer view into performance and activity.
              </p>
            </div>

            <div className="rounded-[28px] bg-slate-100 p-10 shadow-inner">
              <div className="h-40 w-full rounded-xl bg-gradient-to-br from-slate-200 to-slate-300" />
            </div>
          </MotionReveal>

          <MotionReveal delay={0.1} className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1 rounded-[28px] bg-slate-100 p-10 shadow-inner">
              <div className="h-40 w-full rounded-xl bg-gradient-to-br from-slate-200 to-slate-300" />
            </div>

            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-semibold tracking-[-0.02em] text-slate-950">
                Business Systems Alignment
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Align ATS, VMS, and compliance systems so workflows reflect how
                your team actually operates day to day.
              </p>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.12} className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.02em] text-slate-950">
                Data Reconciliation & Audit Support
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Identify discrepancies across systems and create structured
                models for ongoing visibility and audit readiness.
              </p>
            </div>

            <div className="rounded-[28px] bg-slate-100 p-10 shadow-inner">
              <div className="h-40 w-full rounded-xl bg-gradient-to-br from-slate-200 to-slate-300" />
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}

export default Services;