function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto w-[min(1200px,92%)]">
        <div className="rounded-[36px] bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.05)] ring-1 ring-slate-200 md:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                Contact
              </p>

              <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
                Let’s fix what’s slowing down your operations
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Whether the challenge is reporting clarity, systems alignment,
                workflow friction, or client-facing visibility, we can start
                with a focused discussion around the problem.
              </p>
            </div>

            <div className="rounded-[28px] bg-stone-50 p-6 ring-1 ring-slate-200">
              <p className="text-sm font-medium text-slate-950">
                Best fit for teams dealing with:
              </p>

              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>Fragmented reporting across core systems</li>
                <li>Manual operational workflows</li>
                <li>Client visibility gaps</li>
                <li>Need for cleaner dashboards and reporting models</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:your@email.com"
              className="rounded-full bg-slate-950 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Start a Focused Discussion
            </a>

            <a
              href="#results"
              className="rounded-full border border-slate-300 px-6 py-3.5 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
            >
              Explore Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;