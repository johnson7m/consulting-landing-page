function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white py-8">
      <div className="mx-auto flex w-[min(1120px,92%)] flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-neutral-500">
          © 2026 Consulting Co. All rights reserved.
        </p>

        <a
          href="#top"
          className="text-sm font-medium text-neutral-600 transition hover:text-neutral-900"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}

export default Footer;