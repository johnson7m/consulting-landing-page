import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-slate-950 py-24 text-white md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(148,163,184,0.14),transparent_24%)]" />

      <div className="relative mx-auto grid w-[min(1180px,92%)] gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-300">
            Clearframe Consulting • Staffing & Workforce Systems
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
            Better visibility for staffing operations, reporting, and business systems.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            We help staffing and workforce vendors reduce reporting friction,
            align fragmented systems, and build practical solutions that improve
            visibility for leadership, delivery teams, and clients.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-blue-500 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-blue-400"
            >
              Discsuss Your Workflow & Reporting
            </a>

            <a
              href="#results"
              className="rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/5"
            >
              See How We've Improved Operations
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
            <div>
              <span className="block font-medium text-white">Operations visibility</span>
              <span className="mt-1 block">
                Dashboards, workflow insight, reporting clarity
              </span>
            </div>
            <div>
              <span className="block font-medium text-white">Systems alignment</span>
              <span className="mt-1 block">
                ATS, VMS, compliance, and client-facing workflows
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
          className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(2,6,23,0.35)] backdrop-blur-md md:p-8"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                What this looks like
              </p>
              <p className="mt-2 text-lg font-medium text-white">
                Practical support where operations and systems break down
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5">
              <p className="text-sm font-medium text-white">
                Reporting spread across multiple systems
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Bring ATS, VMS, compliance, and operational data into clearer reporting views.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5">
              <p className="text-sm font-medium text-white">
                Manual processes that slow teams down
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Reduce friction with cleaner workflow design, automation-friendly structure, and better data visibility.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5">
              <p className="text-sm font-medium text-white">
                Client-facing visibility that needs improvement
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Create external reporting experiences that strengthen trust and reduce back-and-forth.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;