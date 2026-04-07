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
    <section id="services" className="py-20 md:py-24">
      <div className="mx-auto w-[min(1120px,92%)]">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
          Services
        </p>

        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Focused on the operational realities of staffing and workforce teams
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
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