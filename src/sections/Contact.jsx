function Contact() {
  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="mx-auto w-[min(1120px,92%)]">
        <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm md:p-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Contact
          </p>

          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Let’s talk about what you need
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
            Whether you need support with systems, reporting, process design, or
            a customer-facing solution, we can start with a simple conversation.
          </p>

          <div className="mt-8">
            <a
              href="mailto:your@email.com"
              className="inline-flex rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;