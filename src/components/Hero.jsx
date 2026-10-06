import { profile } from '../content';

export default function Hero() {
  return (
    <header id="top" className="hero">
      <div className="container hero-inner">
        <p className="eyebrow">Portfolio</p>
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-headline">{profile.headline}</p>
        <div className="divider divider--center" />
        <p className="hero-intro">{profile.intro}</p>
        <ul className="contact">
          {profile.contact.map((item) => (
            <li key={item.label}>
              <span className="contact-label">{item.label}</span>
              <a href={item.href} target="_blank" rel="noreferrer">{item.value}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
