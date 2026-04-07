function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] w-[min(1180px,92%)] items-center justify-between">
        <a
          href="#top"
          className="text-sm font-semibold uppercase tracking-[0.22em] text-white"
        >
          Workforce Systems Consulting
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#services"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Services
          </a>
          <a
            href="#results"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Results
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Approach
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white px-4 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;