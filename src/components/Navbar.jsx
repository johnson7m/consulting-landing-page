import { useEffect, useState } from "react";
import MotionReveal from "./MotionReveal";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Problems", href: "#problems" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Results", href: "#results" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-slate-200/80 bg-stone-50/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex min-h-[78px] w-[min(1100px,92%)] items-center justify-between">
        <a
          href="#top"
          aria-label="Visible Gap home"
          className="group inline-flex items-center gap-3 text-slate-950"
        >
          <span className="relative flex h-6 w-5 items-center justify-center">
            <img
              src="/logo.svg"
              alt=""
              className="h-6 w-auto transition-transform duration-300 ease-out group-hover:-translate-y-[1px]"
            />

            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[3px] w-[7px] -translate-x-1/2 -translate-y-1/2 bg-stone-50/90 transition-all duration-300 ease-out group-hover:w-[9px]"
            />
          </span>

          <span className="text-[13px] font-semibold tracking-[0.14em] transition-transform duration-300 ease-out group-hover:translate-x-[1px]">
            Visible Gap
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-slate-950 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Request Audit
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-slate-300 p-3 text-slate-950 transition hover:bg-white/80 md:hidden"
        >
          <span className="flex w-5 flex-col gap-1">
            <span className="h-px w-full bg-slate-950" />
            <span className="h-px w-full bg-slate-950" />
            <span className="h-px w-full bg-slate-950" />
          </span>
        </button>
      </div>

      {menuOpen && (
        <MotionReveal
          y={12}
          duration={0.35}
          className="border-t border-slate-200 bg-stone-50 md:hidden"
        >
          <nav className="mx-auto flex w-[min(1100px,92%)] flex-col gap-2 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-white hover:text-slate-950"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl bg-slate-950 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Request Audit
            </a>
          </nav>
        </MotionReveal>
      )}
    </header>
  );
}

export default Navbar;
