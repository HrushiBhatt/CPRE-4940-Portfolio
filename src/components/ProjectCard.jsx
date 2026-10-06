export function Field({ label, children }) {
  return (
    <div className="field">
      <p className="field-label">{label}</p>
      {typeof children === 'string' ? <p>{children}</p> : children}
    </div>
  );
}

export function Tags({ items }) {
  return (
    <ul className="tags">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

// A PDF or link button; shows a "coming soon" placeholder while href is empty.
export function DocLink({ href, children }) {
  if (!href) return <span className="button is-disabled">PDF coming soon</span>;
  return (
    <a className="button" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default function ProjectCard({ project, index = 0 }) {
  const { title, course, image, imageFit, imagePosition, description, role, skills, resources } = project;

  return (
    <article className="card project reveal" style={{ '--delay': `${index * 120}ms` }}>
      <div className={imageFit === 'contain' ? 'project-image project-image--contain' : 'project-image'}>
        <img src={image} alt={title} loading="lazy" style={{ objectPosition: imagePosition }} />
      </div>
      <div className="project-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-subtitle">{course}</p>
        <Field label="Description">{description}</Field>
        <Field label="My Role">{role}</Field>
        <Field label="Skills & Knowledge Gained"><Tags items={skills} /></Field>
        <Field label="Resources Used"><Tags items={resources} /></Field>
      </div>
    </article>
  );
}
