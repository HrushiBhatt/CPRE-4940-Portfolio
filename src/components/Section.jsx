export default function Section({ id, number, title, alt, children }) {
  return (
    <section id={id} className={alt ? 'section section--alt' : 'section'}>
      <div className="container">
        <p className="eyebrow">{number}</p>
        <h2 className="section-title">{title}</h2>
        <div className="divider" />
        {children}
      </div>
    </section>
  );
}
