function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="mx-auto flex w-[min(1180px,92%)] flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-500">
          © 2026 Workforce Systems Consulting. All rights reserved.
        </p>

        <a
          href="#top"
          className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}

export default Footer;