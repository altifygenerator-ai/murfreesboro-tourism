export default function FAQList({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  return (
    <section className="section pt-0">
      <div className="container">
        <div className="section-heading">
          <p className="hero-eyebrow">Questions</p>
          <h2>Quick answers for planning.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.question} className="card p-6">
              <h3 className="text-xl font-semibold text-[color:var(--color-text)]">{faq.question}</h3>
              <p className="mt-3 leading-7 text-[color:var(--color-muted)]">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
