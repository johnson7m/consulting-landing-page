import MotionReveal from "../components/MotionReveal";

function ProofStrip() {
  const items = [
    "Client-facing reporting portals",
    "Offer and performance dashboards",
    "Tri-system reconciliation models",
    "Built for staffing & workforce operations",
  ];

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto w-[min(1100px,92%)] py-8">
        <MotionReveal className="grid gap-6 lg:grid-cols-[220px_1fr] lg:items-start">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
            Selected capabilities
          </p>

          <div className="flex flex-wrap gap-3">
            {items.map((item) => (
              <div
                key={item}
                className="rounded-full px-4 py-2 text-sm text-slate-700 ring-1 ring-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

export default ProofStrip;