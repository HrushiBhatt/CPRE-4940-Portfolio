import { useEffect, useRef, useState } from 'react';
import { profile } from '../content';

const links = [
  ['objective', 'Objective'],
  ['senior-design', 'Senior Design'],
  ['projects', 'Projects'],
  ['internships', 'Internships'],
  ['resume', 'Résumé'],
  ['reflections', 'Reflections'],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const progress = useRef(null);

  // Solid background once the page scrolls, plus a thin reading-progress line.
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={scrolled ? 'nav nav--scrolled' : 'nav'}>
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
      <div className="nav-progress" ref={progress} />
    </nav>
  );
}
