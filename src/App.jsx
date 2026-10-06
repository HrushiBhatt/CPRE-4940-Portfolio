import { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Section from './components/Section';
import ProjectCard, { DocLink, Field, Tags } from './components/ProjectCard';
import {
  profile,
  careerObjective,
  seniorDesign,
  projects,
  internships,
  resume,
  reflections,
} from './content';

const delay = (i) => ({ '--delay': `${i * 120}ms` });

// Fades each .reveal element up the first time it scrolls into view.
function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function EntryList({ title, items, index }) {
  return (
    <div className="card card--padded reveal" style={delay(index)}>
      <h3 className="card-title">{title}</h3>
      <ul className="entries">
        {items.map((item) => (
          <li key={item.title}>
            <strong>{item.title}</strong>
            <span>{item.detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  useReveal();
  const email = profile.contact.find((item) => item.label === 'Email');

  return (
    <>
      <Nav />
      <Hero />

      <main>
        <Section id="objective" number="01" title="Career Objective">
          <div className="objective">
            {careerObjective.map((text, i) => <p key={i} className="reveal" style={delay(i)}>{text}</p>)}
          </div>
        </Section>

        <Section id="senior-design" number="02" title="Senior Design Project" cream>
          <article className="card card--padded reveal">
            <h3 className="card-title">{seniorDesign.title}</h3>
            <p className="card-subtitle">{seniorDesign.subtitle}</p>
            <div className="two-col">
              <div>
                <Field label="Description">{seniorDesign.description}</Field>
                <Field label="My Role">{seniorDesign.role}</Field>
                <Field label="Big Picture Contribution">{seniorDesign.bigPicture}</Field>
              </div>
              <div>
                <Field label="Skills & Knowledge Gained"><Tags items={seniorDesign.skills} /></Field>
                <Field label="Supporting Documents">
                  <ul className="links">
                    {seniorDesign.links.map((link) => (
                      <li key={link.label}>
                        {link.href ? (
                          <a href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
                        ) : (
                          <span className="pending">{link.label} (coming soon)</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </Field>
              </div>
            </div>
          </article>
        </Section>

        <Section id="projects" number="03" title="Projects">
          <div className="grid">
            {projects.map((project, i) => <ProjectCard key={project.title} project={project} index={i} />)}
          </div>
        </Section>

        <Section id="internships" number="04" title="Internships" cream>
          <div className="stack">
            {internships.map((job, i) => (
              <article key={job.position} className="card card--padded reveal" style={delay(i)}>
                <div className="card-head">
                  <div>
                    <h3 className="card-title">{job.position}</h3>
                    <p className="card-subtitle">{job.company} · {job.location}</p>
                  </div>
                  <p className="dates">{job.dates}</p>
                </div>
                <div className="two-col">
                  <div>
                    <Field label="Duties & Projects">{job.duties}</Field>
                    {job.evaluation && <Field label="Evaluation">{job.evaluation}</Field>}
                    {job.presentations && <Field label="Presentations">{job.presentations}</Field>}
                  </div>
                  <div>
                    <Field label="Technical Skills Learned"><Tags items={job.technicalSkills} /></Field>
                    <Field label="Soft Skills Learned"><Tags items={job.softSkills} /></Field>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="resume" number="05" title="Résumé">
          <div className="reveal">
            <DocLink href={resume.pdf}>View Résumé (PDF)</DocLink>
          </div>
          <div className="grid resume-grid">
            <EntryList title="Research & Published Papers" items={resume.research} index={0} />
            <EntryList title="Awards" items={resume.awards} index={1} />
            <EntryList title="Activities" items={resume.activities} index={2} />
          </div>
        </Section>

        <Section id="reflections" number="06" title="Reflections" cream>
          <div className="grid">
            {reflections.map((paper, i) => (
              <article key={paper.label} className="card card--padded paper reveal" style={delay(i)}>
                <h3 className="card-title">{paper.label}</h3>
                {paper.title && <p className="card-subtitle">{paper.title}</p>}
                <p className="paper-summary">{paper.summary}</p>
                <div className="paper-action">
                  <DocLink href={paper.pdf}>Read the Paper (PDF)</DocLink>
                </div>
              </article>
            ))}
          </div>
        </Section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span className="footer-name">{profile.name}</span>
          <a href={email.href}>{email.value}</a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </>
  );
}
