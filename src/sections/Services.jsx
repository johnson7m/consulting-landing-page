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
        "When reporting breaks down or systems do not align, we bring structure and clarity to fix the problem.",
    },
  ];

  return (
    <section id="services" className="bg-white py-24 md:py-32">
      <div className="mx-auto w-[min(1200px,92%)]">
        <div className="max-w-3xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
            Services
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
            Focused on the operational realities of staffing and workforce teams
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Our work is designed to improve visibility, reduce friction, and
            create systems support that holds up in the real world.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[28px] bg-stone-50/80 p-7 shadow-sm ring-1 ring-slate-200 transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
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