function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto w-[min(1180px,92%)]">
        <div className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.06)] md:p-14">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
            Contact
          </p>

          <h2 className="max-w-4xl text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl">
            Let’s fix what’s slowing down your operations
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Whether the challenge is reporting clarity, systems alignment,
            workflow friction, or client-facing visibility, we can start with a
            focused conversation around the problem.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:your@email.com"
              className="rounded-full bg-slate-950 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Start the Conversation
            </a>

            <a
              href="#results"
              className="rounded-full border border-slate-300 px-6 py-3.5 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
            >
              Review Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;