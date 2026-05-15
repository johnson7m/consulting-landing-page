import MotionReveal from "../components/MotionReveal";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-stone-50 py-12">
      <div className="mx-auto w-[min(1100px,92%)]">
        <MotionReveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[13px] font-semibold tracking-[0.18em] text-slate-950">
              Visible Gap
            </p>
            <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
              Operations visibility and systems consulting for staffing,
              workforce, and SMB teams that need clearer workflows, dashboards,
              and practical implementation roadmaps.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm text-slate-500 md:items-end">
            <div className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end">
              <a href="#problems" className="font-medium text-slate-700 transition hover:text-slate-950">
                Problems
              </a>
              <a href="#services" className="font-medium text-slate-700 transition hover:text-slate-950">
                Services
              </a>
              <a href="#pricing" className="font-medium text-slate-700 transition hover:text-slate-950">
                Pricing
              </a>
              <a href="#contact" className="font-medium text-slate-700 transition hover:text-slate-950">
                Contact
              </a>
            </div>
            <p>© 2026 Visible Gap. All rights reserved.</p>
            <a
              href="#top"
              className="font-medium text-slate-700 transition hover:text-slate-950"
            >
              Back to top
            </a>
          </div>
        </MotionReveal>
      </div>
    </footer>
  );
}

export default Footer;
