import MotionReveal from "../components/MotionReveal";
import { CalendarClock, CircleCheckBig } from "lucide-react";

function Field({ id, label, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-900">
        {label}
      </label>
      {children}
    </div>
  );
}

function Contact() {
  const painPoints = [
    "Reporting is fragmented across systems",
    "Too much manual tracking or spreadsheet work",
    "CRM or process visibility needs cleanup",
    "Need clearer dashboards or leadership views",
    "Need a practical systems roadmap",
    "Not sure yet - looking for a starting point",
  ];

  const fitItems = [
    "Staffing, workforce, recruiting, payrolling, or contingent labor operations",
    "SMB teams outgrowing spreadsheets, disconnected tools, or informal follow-up",
    "Leaders who need clearer reporting, account health, pipeline, or workflow visibility",
    "Operators who want practical implementation guidance instead of vague strategy",
  ];

  const inputClass =
    "w-full rounded-2xl border border-slate-200 bg-stone-50 px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-950 focus:outline-none focus:ring-0";

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto w-[min(1100px,92%)]">
        <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <MotionReveal className="max-w-xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              Start the conversation
            </p>

            <h2 className="text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
              Request a visibility audit or project-fit conversation
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Share the operational issue, current tools, and timing. We will
              follow up within one business day with a practical next step.
            </p>

            <div className="mt-12 space-y-8">
              <div>
                <p className="text-sm font-medium text-slate-950">
                  Best fit for teams dealing with:
                </p>

                <div className="mt-5 space-y-4">
                  {fitItems.map((item) => (
                    <div key={item} className="flex gap-3 border-b border-slate-200 pb-4">
                      <CircleCheckBig className="mt-1 h-4 w-4 shrink-0 text-sky-600" />
                      <p className="text-sm leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <div className="rounded-[32px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] ring-1 ring-slate-200 md:p-8">
              <div className="flex flex-col gap-8">
                <div className="order-1">
                  <div className="border-b border-slate-200 pb-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Discovery intake
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-normal text-slate-950">
                      Tell us what needs to be clearer
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      A few specifics help route the conversation toward the right
                      deliverable: audit, blueprint, dashboard, cleanup sprint, or advisory.
                    </p>
                  </div>

                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    className="mt-8 space-y-8"
                  >
                    <input type="hidden" name="form-name" value="contact" />

                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field id="name" label="Full name">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Jane Smith"
                          required
                          className={inputClass}
                        />
                      </Field>

                      <Field id="company" label="Company name">
                        <input
                          id="company"
                          name="company"
                          type="text"
                          placeholder="Your company"
                          required
                          className={inputClass}
                        />
                      </Field>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field id="email" label="Email address">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@company.com"
                          required
                          className={inputClass}
                        />
                      </Field>

                      <Field id="businessType" label="Business type">
                        <select
                          id="businessType"
                          name="businessType"
                          required
                          className={inputClass}
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select one
                          </option>
                          <option>Staffing / recruiting / workforce vendor</option>
                          <option>SMB owner / operator</option>
                          <option>Professional services</option>
                          <option>Other operating team</option>
                        </select>
                      </Field>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field id="tools" label="Current tools / CRM">
                        <input
                          id="tools"
                          name="tools"
                          type="text"
                          placeholder="Salesforce, HubSpot, Bullhorn, spreadsheets..."
                          className={inputClass}
                        />
                      </Field>

                      <Field id="timeline" label="Desired timeline">
                        <select
                          id="timeline"
                          name="timeline"
                          className={inputClass}
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select one
                          </option>
                          <option>As soon as possible</option>
                          <option>Next 30 days</option>
                          <option>Next 60-90 days</option>
                          <option>Exploring for later</option>
                        </select>
                      </Field>
                    </div>

                    <Field id="budget" label="Budget range (optional)">
                      <select
                        id="budget"
                        name="budget"
                        className={inputClass}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select one
                        </option>
                        <option>Under $1,500</option>
                        <option>$1,500-$3,500</option>
                        <option>$3,500-$7,500</option>
                        <option>$7,500+</option>
                        <option>Not sure yet</option>
                      </select>
                    </Field>

                    <fieldset>
                      <legend className="mb-4 text-sm font-medium text-slate-900">
                        What best describes the issue?
                      </legend>

                      <div className="grid gap-3 sm:grid-cols-2">
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

                    <Field id="challenge" label="What should be clearer after this project?">
                      <textarea
                        id="challenge"
                        name="challenge"
                        rows="5"
                        placeholder="A short description of the reporting, workflow, CRM, dashboard, or systems issue you are trying to solve."
                        required
                        className="w-full rounded-2xl border border-slate-200 bg-stone-50 px-4 py-4 text-sm leading-6 text-slate-900 placeholder:text-slate-400 focus:border-slate-950 focus:outline-none focus:ring-0"
                      />
                    </Field>

                    <div className="space-y-4">
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-slate-800"
                      >
                        Request a Visibility Audit
                      </button>

                      <p className="text-center text-sm leading-6 text-slate-500">
                        No hard pitch. Just a focused conversation around the
                        operational clarity you are trying to create.
                      </p>
                    </div>
                  </form>
                </div>

                <div className="order-2 rounded-[24px] bg-stone-50 p-6 ring-1 ring-slate-200">
                  <div className="flex items-center gap-2 text-sky-600">
                    <CalendarClock className="h-4 w-4" />
                    <p className="text-sm font-medium text-slate-950">
                      What happens next
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Visible Gap reviews the context, identifies the likely
                    starting point, and follows up with whether an audit, blueprint,
                    buildout, cleanup sprint, or advisory engagement makes sense.
                  </p>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
