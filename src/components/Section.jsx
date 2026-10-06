export default function Section({ id, number, title, cream, children }) {
  return (
    <section id={id} className={cream ? 'section section--cream' : 'section'}>
      <div className="container">
        <header className="section-head reveal">
          <p className="eyebrow">{number}</p>
          <h2 className="section-title">{title}</h2>
        </header>
        {children}
      </div>
    </section>
  );
}
