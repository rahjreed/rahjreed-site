import { ArrowRight, BookOpen, Gamepad2, PartyPopper, Wrench } from 'lucide-react';
import PageIntro from '../components/PageIntro';
import ArcadeButton from '../components/ArcadeButton';
import { customGamePackages, adjustmentStartingPrice, formatPrice } from '../data/pricing';

const icons = { organizational: BookOpen, personal: PartyPopper, original: Gamepad2 };

export default function CustomGames() {
  return <div className="container page-content">
    <PageIntro eyebrow="CUSTOM GAMES BY R2G2" title={<>YOUR IDEA.<br /><span className="gold">PRESS START.</span></>}>
      <p>Customize an existing R2G2 game for your people, or commission a fully original adventure. Choose the starting point that fits your idea.</p>
    </PageIntro>
    <div className="engine-options">
      <div><h2>Customize an existing game.</h2><p>Educational and party packages build on existing R2G2 game engines, with content and personalization tailored to your project.</p></div>
      <div><h2>Build something entirely new.</h2><p>New mechanics, gameplay systems, environments, and original concepts belong in fully original game development and are scoped separately.</p></div>
    </div>
    <div className="pricing-grid pricing-grid-three">{customGamePackages.map((offer) => {
      const Icon = icons[offer.id];
      return <article className="pricing-card" key={offer.id}>
        <Icon size={30} className="gold" aria-hidden="true" />
        <p className="eyebrow">{offer.label}</p>
        <h2>{offer.title}</h2>
        <span className="engine-badge">{offer.engineType}</span>
        <p>{offer.description}</p>
        <div className="price"><span>Creation starting at</span><strong>{formatPrice(offer.creationPrice)}</strong><span>{offer.monthlyMaintenance === null ? 'Hosting and maintenance: Custom quote' : '+ ' + formatPrice(offer.monthlyMaintenance) + '/month hosting and maintenance'}</span></div>
        <p>{offer.details}</p>
        <ArcadeButton to={'/contact?type=' + offer.id} variant={offer.id === 'organizational' ? 'primary' : 'secondary'}>{offer.action} <ArrowRight size={16} aria-hidden="true" /></ArcadeButton>
      </article>;
    })}</div>
    <p className="pricing-disclaimer">All prices are starting prices, not universal fixed quotes. Final pricing depends on agreed scope, content, and features. Custom projects are quoted individually; no game-development checkout is provided on this website.</p>
    <section className="adjustment-note"><Wrench size={26} className="gold" aria-hidden="true" /><div><h2>Post-Delivery Adjustments</h2><p>Starting at <strong>{formatPrice(adjustmentStartingPrice)} per defined adjustment request</strong>. Major changes and additional features require separate quotes.</p></div></section>
    <section className="section"><p className="eyebrow">FROM CONCEPT TO CONTROLLER</p><h2>HOW WE BUILD YOUR GAME.</h2><div className="steps-grid">{[
      ['01', 'Share the idea', 'Tell us who will play, what you want them to learn or celebrate, and your preferred timeline.'],
      ['02', 'Define the adventure', 'Choose an existing engine or original development, then agree on content, features, scope, and a project-specific quote.'],
      ['03', 'Build, review, play', 'Develop and review the experience, then prepare the agreed game for launch.'],
    ].map(([number, title, description]) => <article key={number}><span className="step-number">{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
  </div>;
}
