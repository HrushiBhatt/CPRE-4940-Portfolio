import { profile } from '../content';

// Staggers each element's entrance on page load.
const step = (i) => ({ '--i': i });

export default function Hero() {
  return (
    <header id="top" className="hero">
      <div className="hero-glow hero-glow--gold" aria-hidden="true" />
      <div className="hero-glow hero-glow--cream" aria-hidden="true" />

      <div className="container hero-inner">
        <div>
          <p className="hero-kicker rise" style={step(0)}>Portfolio</p>
          <h1 className="hero-name rise" style={step(1)}>{profile.name}</h1>
          <p className="hero-headline rise" style={step(2)}>{profile.headline}</p>
          <span className="hero-rule" aria-hidden="true" />
          <p className="hero-welcome rise" style={step(3)}>{profile.welcome}</p>
          <a className="button rise" style={step(4)} href="#objective">Explore the portfolio</a>
        </div>

        <aside className="contact-card rise" style={step(3)}>
          <h2 className="contact-title">Contact</h2>
          <ul className="contact">
            {profile.contact.map((item) => (
              <li key={item.label}>
                <span className="contact-label">{item.label}</span>
                <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <a className="scroll-cue" href="#objective" aria-label="Scroll to content">
        <span />
      </a>
    </header>
  );
}
