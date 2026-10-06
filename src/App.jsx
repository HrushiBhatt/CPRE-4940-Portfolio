import Nav from './components/Nav';
import Hero from './components/Hero';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import {
  profile,
  careerObjective,
  seniorDesign,
  projects,
  internships,
  resume,
  generalEdReflection,
  cumulativeReflection,
  ethicsPaper,
} from './content';

function Paragraphs({ items }) {
  return items.map((text, i) => <p key={i} className="prose">{text}</p>);
}

function EntryList({ title, items }) {
  return (
    <div>
      <h3 className="sub-title">{title}</h3>
      <ul>
        {items.map((item, i) => (
          <li key={i} className="entry">
            <span className="entry-title">
              {item.href ? <a href={item.href} target="_blank" rel="noreferrer">{item.title}</a> : item.title}
            </span>
            <span className="entry-detail">{item.detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />

      <main>
        <Section id="objective" number="01" title="Career Objective">
          <Paragraphs items={careerObjective} />
        </Section>

        <Section id="senior-design" number="02" title="Senior Design Project" alt>
          <ProjectCard project={seniorDesign} />
        </Section>

        <Section id="projects" number="03" title="Projects">
          <div className="grid">
            {projects.map((project, i) => <ProjectCard key={i} project={project} />)}
          </div>
        </Section>

        <Section id="internships" number="04" title="Internships" alt>
          <div className="stack">
            {internships.map((job, i) => (
              <article key={i} className="card">
                <div className="card-head">
                  <div>
                    <h3 className="card-title">{job.position}</h3>
                    <p className="card-meta">{job.company} · {job.location}</p>
                  </div>
                  <p className="card-meta">{job.dates}</p>
                </div>
                <p>{job.description}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="resume" number="05" title="Résumé">
          <a className="button" href={resume.pdf} target="_blank" rel="noreferrer">View Résumé (PDF)</a>
          <div className="resume-grid">
            <EntryList title="Research & Publications" items={resume.research} />
            <EntryList title="Awards & Honors" items={resume.awards} />
            <EntryList title="Activities & Involvement" items={resume.activities} />
          </div>
        </Section>

        <Section id="gen-ed" number="06" title="General Education Reflection" alt>
          <Paragraphs items={generalEdReflection} />
        </Section>

        <Section id="reflection" number="07" title="Cumulative Reflection">
          <Paragraphs items={cumulativeReflection} />
        </Section>

        <Section id="ethics" number="08" title="Ethics Paper" alt>
          <h3 className="card-title">{ethicsPaper.title}</h3>
          <p className="prose">{ethicsPaper.summary}</p>
          <a className="button button--spaced" href={ethicsPaper.pdf} target="_blank" rel="noreferrer">Read the Paper (PDF)</a>
        </Section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
