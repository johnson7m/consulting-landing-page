function Services() {
  const services = [
    {
      title: "Workflow & Process Improvement",
      description:
        "We identify bottlenecks, reduce manual steps, and design cleaner operational workflows that scale with the business.",
    },
    {
      title: "Dashboards & Reporting Solutions",
      description:
        "We build practical reporting structures, internal dashboards, and visibility tools that give teams better insight into the metrics that matter.",
    },
    {
      title: "Portal & Customer-Facing Solutions",
      description:
        "We help translate internal data and business processes into clean external experiences that improve transparency and strengthen client relationships.",
    },
    {
      title: "Data Reconciliation & Audit Support",
      description:
        "We create models that compare data across systems, surface discrepancies, and give leadership a clearer picture of operational performance.",
    },
    {
      title: "Systems Alignment",
      description:
        "We support the connection of key business tools, fields, and workflows so teams can operate with less friction and more consistency.",
    },
    {
      title: "Operational Problem Solving",
      description:
        "When a process is messy, reporting is unreliable, or teams lack visibility, we help bring structure, logic, and execution to the problem.",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-24">
      <div className="mx-auto w-[min(1120px,92%)]">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
          Services
        </p>

        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          Practical support across operations, reporting, and business systems
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-600">
          Our focus is simple: solve real operational problems with solutions that
          improve visibility, reduce friction, and support better execution.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-neutral-900">
                {service.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-neutral-600">
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