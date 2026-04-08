import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Results", href: "#results" },
    { label: "Approach", href: "#about" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] w-[min(1180px,92%)] items-center justify-between">
        <a
          href="#top"
          className="text-[13px]font-semibold tracking-[0.18em] text-white"
        >
          Clearframe
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white px-4 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-white/15 p-3 text-white transition hover:bg-white/5 md:hidden"
        >
          <span className="flex w-5 flex-col gap-1">
            <span className="h-px w-full bg-white" />
            <span className="h-px w-full bg-white" />
            <span className="h-px w-full bg-white" />
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950 md:hidden">
          <nav className="mx-auto flex w-[min(1180px,92%)] flex-col gap-2 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-white px-5 py-3 text-center text-sm font-medium text-slate-950 transition hover:bg-slate-200"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;