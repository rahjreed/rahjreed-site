import { BookOpen, Gamepad2, Server, Sparkles } from 'lucide-react';
import PageIntro from '../components/PageIntro';
import SupportSection from '../components/SupportSection';

const uses = [
  [Gamepad2, 'More retro adventures', 'Support the development of new retro games and help expand the R2G2 arcade.'],
  [Server, 'Keep the free games running', 'Contributions help with hosting and maintenance so free games can keep welcoming players.'],
  [BookOpen, 'More ways to learn', 'Help us develop additional educational content that brings learning into play.'],
  [Sparkles, 'A better arcade experience', 'Support improvements to the R2G2 gaming experience, from usability to the details that make play more enjoyable.'],
];

export default function Support() {
  return <div className="container page-content support-page">
    <PageIntro eyebrow="SUPPORT R2G2" title={<>KEEP THE<br /><span className="gold">ADVENTURES COMING.</span></>}>
      <p>Help grow the free arcade, one voluntary contribution at a time. Choose whether and how much to contribute through Cash App.</p>
    </PageIntro>
    <SupportSection />
    <section className="section" aria-labelledby="support-uses-heading">
      <p className="eyebrow">WHAT YOUR SUPPORT MAKES POSSIBLE</p>
      <h2 id="support-uses-heading">MORE PLAY. <span className="purple-text">MORE POSSIBILITY.</span></h2>
      <div className="support-uses-grid">{uses.map(([Icon, title, description]) =>
        <article key={title}><Icon size={27} className="gold" aria-hidden="true" /><h3>{title}</h3><p>{description}</p></article>
      )}</div>
    </section>
  </div>;
}
