import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-slate-950 py-24 text-white md:py-32 lg:py-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(148,163,184,0.12),transparent_22%)]" />

      <div className="relative mx-auto grid w-[min(1200px,92%)] gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-300">
            Staffing & Workforce Systems Consulting
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
            Clearer operations, cleaner reporting, and better systems for staffing teams.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300 md:text-xl">
            Placeholder Co helps staffing and workforce vendors reduce reporting
            friction, align fragmented systems, and build practical solutions
            that improve visibility for leadership, delivery teams, and clients.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-blue-500 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-blue-400"
            >
              Discuss Your Workflow & Reporting
            </a>

            <a
              href="#results"
              className="rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/5"
            >
              See How We’ve Improved Operations
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl gap-6 sm:grid-cols-2">
            <div>
              <span className="block text-sm font-medium text-white">
                Operations visibility
              </span>
              <span className="mt-2 block text-sm leading-7 text-slate-300">
                Dashboards, workflow insight, and reporting clarity for internal teams and clients.
              </span>
            </div>

            <div>
              <span className="block text-sm font-medium text-white">
                Systems alignment
              </span>
              <span className="mt-2 block text-sm leading-7 text-slate-300">
                Support across ATS, VMS, compliance, and customer-facing workflows.
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
          className="rounded-[32px] bg-white/6 p-6 shadow-[0_24px_70px_rgba(2,6,23,0.35)] ring-1 ring-white/10 backdrop-blur-md md:p-8"
        >
          <div className="border-b border-white/10 pb-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
              Where we help most
            </p>
            <p className="mt-3 text-xl font-medium tracking-[-0.02em] text-white">
              Practical support where operations and systems stop lining up cleanly
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <div className="rounded-[24px] bg-slate-900/40 p-5 ring-1 ring-white/8">
              <p className="text-sm font-medium text-white">
                Reporting spread across multiple systems
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Bring ATS, VMS, compliance, and operational data into clearer reporting views.
              </p>
            </div>

            <div className="rounded-[24px] bg-slate-900/40 p-5 ring-1 ring-white/8">
              <p className="text-sm font-medium text-white">
                Manual workflows slowing delivery teams down
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Reduce friction with cleaner workflow design and better visibility into what matters.
              </p>
            </div>

            <div className="rounded-[24px] bg-slate-900/40 p-5 ring-1 ring-white/8">
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