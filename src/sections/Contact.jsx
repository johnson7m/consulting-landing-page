import MotionReveal from "../components/MotionReveal";
import { CalendarClock } from "lucide-react";

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
      <div className="mx-auto w-[min(1100px,92%)]">
        <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <MotionReveal className="max-w-xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              Get in touch
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
              Let’s identify where your operations are breaking down
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Share a little context and we’ll follow up within one business day
              to better understand the situation and determine whether there’s a fit.
            </p>

            <div className="mt-12 space-y-8">
              <div>
                <p className="text-sm font-medium text-slate-950">
                  Best fit for teams dealing with:
                </p>

                <div className="mt-5 space-y-4">
                  {[
                    "Fragmented reporting across ATS, VMS, or compliance tools",
                    "Manual workflows slowing delivery teams down",
                    "Client visibility gaps or dated reporting experiences",
                    "Need for cleaner dashboards, reconciliation, or workflow design",
                  ].map((item) => (
                    <div key={item} className="border-b border-slate-200 pb-4">
                      <p className="text-sm leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-sky-600">
                  <CalendarClock className="h-4 w-4" />
                  <p className="text-sm font-medium text-slate-950">
                    What happens next
                  </p>
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Placeholder Co will review your submission, follow up within one
                  business day, and start with a focused conversation around the
                  problem you’re trying to solve.
                </p>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <div className="rounded-[32px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] ring-1 ring-slate-200 md:p-8">
              <div className="border-b border-slate-200 pb-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Discovery intake
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                  Start with a focused conversation
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Fill out the form below and we’ll reach out with next steps.
                </p>
              </div>

              <form className="mt-8 space-y-8">
                <div className="grid gap-6 sm:grid-cols-2">
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
                      className="w-full rounded-2xl border border-slate-200 bg-stone-50 px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-950 focus:outline-none focus:ring-0"
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
                      className="w-full rounded-2xl border border-slate-200 bg-stone-50 px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-950 focus:outline-none focus:ring-0"
                    />
                  </div>
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
                    className="w-full rounded-2xl border border-slate-200 bg-stone-50 px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-950 focus:outline-none focus:ring-0"
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
                        className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-stone-50 px-4 py-3"
                      >
                        <input
                          type="checkbox"
                          name="painPoints"
                          value={item}
                          className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
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
                    className="w-full rounded-2xl border border-slate-200 bg-stone-50 px-4 py-4 text-sm leading-6 text-slate-900 placeholder:text-slate-400 focus:border-slate-950 focus:outline-none focus:ring-0"
                  />
                </div>

                <div className="space-y-4">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-slate-800"
                  >
                    Request a Discovery Conversation
                  </button>

                  <p className="text-center text-sm leading-6 text-slate-500">
                    No hard pitch. Just a focused conversation around the problem
                    you’re trying to solve.
                  </p>
                </div>
              </form>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;