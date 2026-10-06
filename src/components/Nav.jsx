import { profile } from '../content';

const links = [
  ['objective', 'Objective'],
  ['senior-design', 'Senior Design'],
  ['projects', 'Projects'],
  ['internships', 'Internships'],
  ['resume', 'Résumé'],
  ['gen-ed', 'Gen Ed'],
  ['reflection', 'Reflection'],
  ['ethics', 'Ethics'],
];

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-brand">{profile.name}</a>
        <ul className="nav-links">
          {links.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
