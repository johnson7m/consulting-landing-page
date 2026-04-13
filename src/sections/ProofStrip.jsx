function ProofStrip() {
  const items = [
    "Client-facing reporting portals",
    "Offer and performance dashboards",
    "Tri-system reconciliation models",
    "Built for staffing & workforce operations",
  ];

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-[min(1200px,92%)] flex-col gap-6 py-6 md:flex-row md:items-center md:justify-between">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
          Selected capabilities
        </p>

        <div className="grid gap-3 md:grid-cols-2 xl:flex xl:flex-wrap xl:justify-end xl:gap-4">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-full bg-slate-50 px-4 py-2 text-sm text-slate-700 ring-1 ring-slate-200"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProofStrip;