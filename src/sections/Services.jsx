function Services() {
  const services = [
    {
      title: "Operations Visibility & Reporting",
      description:
        "Dashboards, reporting structures, and data views that give leadership and clients clearer insight into performance.",
    },
    {
      title: "Business Systems Alignment",
      description:
        "Connect ATS, VMS, and supporting tools into workflows that reflect how your team actually operates.",
    },
    {
      title: "Client-Facing Reporting Experiences",
      description:
        "Translate internal data into clean, external dashboards and portals that improve transparency and client confidence.",
    },
    {
      title: "Data Reconciliation & Audit Support",
      description:
        "Compare data across systems, surface discrepancies, and create structured models for ongoing analysis.",
    },
    {
      title: "Workflow Design & Optimization",
      description:
        "Reduce manual steps and improve how work moves across teams and systems.",
    },
    {
      title: "Operational Problem Solving",
      description:
        "When reporting breaks down or systems don’t align, we bring structure and clarity to fix the problem.",
    },
  ];

  return (
    <section
      id="services"
      className="border-y border-slate-200 bg-white py-20 md:py-28"
    >
      <div className="mx-auto w-[min(1180px,92%)]">
        <div className="max-w-3xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
            Services
          </p>

          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl">
            Focused on the operational realities of staffing and workforce teams
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Our work is designed to improve visibility, reduce friction, and
            create systems support that holds up in the real world.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-[28px] border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            >
              <div className="mb-6 h-px w-12 bg-blue-500" />
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-slate-950">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;