function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex min-h-[72px] w-[min(1120px,92%)] items-center justify-between">
        <a
          href="#top"
          className="text-base font-semibold tracking-[0.02em] text-neutral-900"
        >
          Consulting Co.
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="#services"
            className="text-sm font-medium text-neutral-600 transition hover:text-neutral-900"
          >
            Services
          </a>
          <a
            href="#results"
            className="text-sm font-medium text-neutral-600 transition hover:text-neutral-900"
          >
            Results
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-neutral-600 transition hover:text-neutral-900"
          >
            About
          </a>
          <a
            href="#contact"
            className="rounded-xl bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;