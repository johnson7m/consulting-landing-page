import { useEffect, useRef, useState } from "react";
import MotionReveal from "../components/MotionReveal";

function ProofStrip() {
  const items = [
    "Client-facing reporting portals",
    "Offer and performance dashboards",
    "Tri-system reconciliation models",
    "Built for staffing & workforce operations",
  ];

  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const updateScrollState = () => {
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      setCanScrollLeft(el.scrollLeft > 4);
      setCanScrollRight(el.scrollLeft < maxScrollLeft - 4);
    };

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollByAmount = (amount) => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="overflow-x-clip border-b border-slate-200/80 bg-transparent">
      <div className="mx-auto w-[min(1100px,92%)] overflow-hidden py-10">
        <MotionReveal className="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
            Selected capabilities
          </p>

          <div className="relative min-w-0 overflow-hidden">
            {canScrollLeft && (
              <>
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-stone-50 to-transparent" />
                <button
                  type="button"
                  aria-label="Scroll left"
                  onClick={() => scrollByAmount(-220)}
                  className="absolute left-1 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-slate-600 shadow-sm ring-1 ring-slate-200 transition hover:text-slate-950"
                >
                  ←
                </button>
              </>
            )}

            {canScrollRight && (
              <>
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-stone-50 to-transparent" />
                <button
                  type="button"
                  aria-label="Scroll right"
                  onClick={() => scrollByAmount(220)}
                  className="absolute right-1 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-slate-600 shadow-sm ring-1 ring-slate-200 transition hover:text-slate-950"
                >
                  →
                </button>
              </>
            )}

            <div
              ref={scrollRef}
              className="overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              <div className="flex w-max max-w-none items-center gap-6 whitespace-nowrap pr-10">
                {items.map((item, index) => (
                  <span key={item} className="shrink-0 text-sm leading-7 text-slate-700">
                    {item}
                    {index < items.length - 1 && (
                      <span className="ml-6 text-slate-300">/</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

export default ProofStrip;