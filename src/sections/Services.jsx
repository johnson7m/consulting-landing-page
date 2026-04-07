function Services() {
  const services = [
    {
      title: "Process Improvement",
      description:
        "Identify inefficiencies, reduce manual work, and create cleaner, more reliable workflows.",
    },
    {
      title: "Reporting & Visibility",
      description:
        "Build dashboards, reporting structures, and operational views that support better decisions.",
    },
    {
      title: "Business Technology Support",
      description:
        "Connect tools, organize systems, and create practical solutions that help teams execute faster.",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-24">
      <div className="mx-auto w-[min(1120px,92%)]">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
          Services
        </p>

        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          Where we can help
        </h2>

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