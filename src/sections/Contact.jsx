function Contact() {
  const painPoints = [
    "Reporting is fragmented across systems",
    "Too much manual tracking or spreadsheet work",
    "Client visibility needs improvement",
    "Systems do not align cleanly",
    "Not sure yet — just exploring",
  ];

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto w-[min(1200px,92%)]">
        <div className="rounded-[36px] bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.05)] ring-1 ring-slate-200 md:p-14">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                Get in touch
              </p>

              <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
                Let’s identify where your operations are breaking down
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Share a little context below and we’ll follow up within one
                business day to better understand your situation and determine
                whether there is a fit.
              </p>

              <div className="mt-10 rounded-[28px] bg-stone-50 p-6 ring-1 ring-slate-200">
                <p className="text-sm font-medium text-slate-950">
                  Best fit for teams dealing with:
                </p>

                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  <li>Fragmented reporting across ATS, VMS, or compliance tools</li>
                  <li>Manual workflows that slow delivery teams down</li>
                  <li>Client visibility gaps or dated reporting experiences</li>
                  <li>Need for cleaner dashboards, reconciliation, or workflow design</li>
                </ul>
              </div>
            </div>

            <div className="rounded-[32px] bg-stone-50/70 p-6 ring-1 ring-slate-200 md:p-8">
              <form className="space-y-8">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-900"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jane Smith"
                    className="w-full rounded-2xl border-0 bg-white px-4 py-3.5 text-sm text-slate-900 shadow-sm ring-1 ring-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-medium text-slate-900"
                  >
                    Company name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company"
                    className="w-full rounded-2xl border-0 bg-white px-4 py-3.5 text-sm text-slate-900 shadow-sm ring-1 ring-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-900"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    className="w-full rounded-2xl border-0 bg-white px-4 py-3.5 text-sm text-slate-900 shadow-sm ring-1 ring-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <fieldset>
                  <legend className="mb-4 text-sm font-medium text-slate-900">
                    What best describes your situation?
                  </legend>

                  <div className="space-y-3">
                    {painPoints.map((item) => (
                      <label
                        key={item}
                        className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200"
                      >
                        <input
                          type="checkbox"
                          name="painPoints"
                          value={item}
                          className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm leading-6 text-slate-700">
                          {item}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label
                    htmlFor="challenge"
                    className="mb-2 block text-sm font-medium text-slate-900"
                  >
                    What is the biggest issue you’re dealing with right now?
                  </label>
                  <textarea
                    id="challenge"
                    name="challenge"
                    rows="5"
                    placeholder="A short description of the reporting, workflow, or systems issue you're trying to solve."
                    className="w-full rounded-2xl border-0 bg-white px-4 py-3.5 text-sm leading-6 text-slate-900 shadow-sm ring-1 ring-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-4">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-slate-800"
                  >
                    Request a Discovery Conversation
                  </button>

                  <p className="text-sm leading-6 text-slate-500">
                    We’ll follow up within one business day. No hard pitch — just
                    a focused conversation around the problem you’re trying to solve.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;