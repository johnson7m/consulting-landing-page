import MotionReveal from "../components/MotionReveal";

function ProofStrip() {
  const items = [
    "Client-facing reporting portals",
    "Offer and performance dashboards",
    "Tri-system reconciliation models",
    "Built for staffing & workforce operations",
  ];

  return (
    <section className="border-b border-slate-200 bg-stone-50">
      <div className="mx-auto w-[min(1100px,92%)] py-10">
        <MotionReveal className="grid gap-6 lg:grid-cols-[220px_1fr] lg:items-start">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
            Selected capabilities
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {items.map((item) => (
              <span
                key={item}
                className="text-sm leading-7 text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

export default ProofStrip;