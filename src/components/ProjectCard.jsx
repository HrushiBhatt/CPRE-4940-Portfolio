function Field({ label, children }) {
  return (
    <div className="field">
      <p className="field-label">{label}</p>
      {typeof children === 'string' ? <p>{children}</p> : children}
    </div>
  );
}

function Tags({ items }) {
  return (
    <ul className="tags">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
}

// Used for both the Senior Design project and the regular projects.
// Optional fields (resources, bigPicture, links) only render when present.
export default function ProjectCard({ project }) {
  const { title, description, role, skills, resources, bigPicture, links } = project;

  return (
    <article className="card">
      <h3 className="card-title">{title}</h3>
      <Field label="Description">{description}</Field>
      <Field label="My Role">{role}</Field>
      <Field label="Skills & Knowledge Gained"><Tags items={skills} /></Field>
      {resources && <Field label="Resources Used"><Tags items={resources} /></Field>}
      {bigPicture && <Field label="Big Picture Contribution">{bigPicture}</Field>}
      {links && (
        <Field label="Supporting Documents">
          <ul className="links">
            {links.map((link, i) => (
              <li key={i}>
                <a href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
              </li>
            ))}
          </ul>
        </Field>
      )}
    </article>
  );
}
