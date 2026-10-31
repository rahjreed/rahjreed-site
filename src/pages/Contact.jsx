import { useSearchParams } from 'react-router-dom';
import { ArrowUpRight, BookOpen, ClipboardList, Gamepad2, Mail, PartyPopper } from 'lucide-react';
import PageIntro from '../components/PageIntro';
import { games } from '../data/games';

const email = 'hello@callistadigital.com';
const subject = 'R2G2 Custom Game Inquiry';
const emailLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject);
const projectTypes = {
  organizational: 'Custom educational game',
  personal: 'Personalized party / adventure game',
};

export default function Contact() {
  const [params] = useSearchParams();
  const selectedGame = games.find((game) => game.slug === params.get('game'));
  const projectType = Object.hasOwn(projectTypes, params.get('type')) ? projectTypes[params.get('type')] : undefined;
  const body = [
    'Hello R2G2,',
    '',
    'I’d like to inquire about a custom game.',
    ...(projectType ? ['Project type: ' + projectType] : []),
    ...(selectedGame ? ['Game inspiration: ' + selectedGame.title] : []),
    '',
    'My idea:',
    '',
    'Who will play:',
    '',
    'Preferred timeline:',
    '',
    'Estimated budget:',
    '',
  ].join('\n');
  const requestLink = emailLink + '&body=' + encodeURIComponent(body);

  return <div className="container page-content">
    <PageIntro eyebrow="CONTACT / REQUEST A GAME" title={<>LET’S MAKE<br /><span className="gold">SOMETHING PLAYABLE.</span></>}>
      <p>Bring your idea to the arcade. Inquire about custom educational games, personalized party games, and retro arcade experiences made around your people.</p>
    </PageIntro>
    <div className="contact-layout">
      <section className="request-panel email-inquiry" aria-labelledby="inquiry-heading">
        <div className="inquiry-icon" aria-hidden="true"><Mail size={30} /></div>
        <p className="eyebrow">YOUR NEXT ADVENTURE STARTS HERE</p>
        <h2 id="inquiry-heading">YOUR IDEA.<br /><span className="gold">OUR NEXT CONVERSATION.</span></h2>
        <p>Tell us what you have in mind. Whether you’re planning a learning experience, a personal celebration, or an original retro adventure, we’d love to hear about it.</p>
        <div className="inquiry-offerings">
          <span><BookOpen size={18} aria-hidden="true" /> Educational games</span>
          <span><PartyPopper size={18} aria-hidden="true" /> Personalized party games</span>
          <span><Gamepad2 size={18} aria-hidden="true" /> Retro arcade experiences</span>
        </div>
        {(selectedGame || projectType) && <div className="inquiry-context">
          <p className="eyebrow">INCLUDED IN YOUR EMAIL DRAFT</p>
          {projectType && <p>Project type: <strong>{projectType}</strong></p>}
          {selectedGame && <p>Game inspiration: <strong>{selectedGame.title}</strong></p>}
        </div>}
        <a className="arcade-button inquiry-button" href={requestLink} data-sound="coin"><Mail size={18} aria-hidden="true" /> REQUEST YOUR GAME <ArrowUpRight size={18} aria-hidden="true" /></a>
        <p className="helper-text">Opens your email application with the subject “{subject}”. Review your draft and send it when you’re ready.</p>
        <div className="inquiry-email">
          <span>Prefer your own email service?</span>
          <a href={emailLink}>{email}</a>
          <p>Click the address to compose an email, or copy it into your preferred email service.</p>
        </div>
      </section>
      <aside className="contact-sidebar">
        <ClipboardList size={29} className="gold" aria-hidden="true" />
        <h2>A GOOD GAME<br />STARTS WITH AN IDEA.</h2>
        <p>A few details help us understand your project:</p>
        <ul className="brief-list"><li>Who the game is for</li><li>Your learning goal or occasion</li><li>The style of game you have in mind</li><li>Your timeline and starting budget</li></ul>
        <div className="inquiry-note"><h3>Make the first move.</h3><p>You don’t need a finished game plan to start a conversation. Share your idea and we can explore the possibilities together.</p></div>
      </aside>
    </div>
  </div>;
}
