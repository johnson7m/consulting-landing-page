import MotionReveal from "../components/MotionReveal";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-stone-50 py-12">
      <div className="mx-auto w-[min(1100px,92%)]">
        <MotionReveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[13px] font-semibold tracking-[0.18em] text-slate-950">
              Visible Gap
            </p>
            <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
              Systems, reporting, and workflow consulting for staffing teams that
              need clearer operations and better visibility.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-slate-500 md:items-end">
            <p>© 2026 Visible Gap All rights reserved.</p>
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