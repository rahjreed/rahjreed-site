import { useSearchParams } from 'react-router-dom';
import { Info, ClipboardList } from 'lucide-react';
import PageIntro from '../components/PageIntro';
import { games } from '../data/games';

export default function Contact() {
  const [params] = useSearchParams();
  const selectedGame = games.find((game) => game.slug === params.get('game'));
  const projectType = ['organizational', 'personal'].includes(params.get('type')) ? params.get('type') : '';
  return <div className="container page-content">
    <PageIntro eyebrow="CONTACT / REQUEST A GAME" title={<>LET’S MAKE<br /><span className="gold">SOMETHING PLAYABLE.</span></>}><p>Have an idea for a class, a community, or a celebration? Start shaping your game here.</p></PageIntro>
    <div className="contact-layout"><section className="request-panel" aria-labelledby="request-heading"><h2 id="request-heading">YOUR GAME BRIEF</h2><div className="notice" id="submission-notice"><Info size={21} aria-hidden="true" /><p><strong>Inquiries aren’t open yet.</strong> This is a preview of the request form. Nothing entered here is sent or saved. A verified contact destination is still being connected.</p></div>
      <form aria-describedby="submission-notice" onSubmit={(event) => event.preventDefault()}>
        <div className="form-row"><label>Your name<input name="name" autoComplete="name" placeholder="Your name" /></label><label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" /></label></div>
        <label>Organization or occasion <span className="optional">(optional)</span><input name="organization" placeholder="School, church, business, birthday…" /></label>
        <div className="form-row"><label>Project type<select name="projectType" defaultValue={projectType} key={'type-' + projectType}><option value="">Choose a project type</option><option value="organizational">Organizational educational game</option><option value="personal">Personalized party / adventure game</option><option value="other">Other / exploring an idea</option></select></label><label>Game inspiration<select name="game" defaultValue={selectedGame?.slug || ''} key={'game-' + (selectedGame?.slug || '')}><option value="">Not sure yet</option>{games.map((game) => <option key={game.slug} value={game.slug}>{game.title}</option>)}</select></label></div>
        <div className="form-row"><label>Target date <span className="optional">(optional)</span><input type="date" name="date" /></label><label>Budget range <span className="optional">(optional)</span><input name="budget" placeholder="Your estimated budget" /></label></div>
        <label>Tell us about your idea<textarea name="idea" rows={5} placeholder="Who will play? What should they learn or celebrate? What would make this game special?" /></label>
        <button type="submit" className="arcade-button" disabled>Submissions not yet available</button><p className="helper-text">Please don’t enter sensitive information. This preview clears when you leave the page.</p>
      </form></section>
      <aside className="contact-sidebar"><ClipboardList size={29} className="gold" aria-hidden="true" /><h2>A GOOD GAME<br />STARTS WITH AN IDEA.</h2><p>Before sending a request, think about:</p><ul className="brief-list"><li>Who the game is for</li><li>Your learning goal or occasion</li><li>The style of game you have in mind</li><li>Your timeline and starting budget</li></ul><div className="activation-note"><h3>Submission setup pending</h3><p>To activate this form, R2G2 needs a verified recipient or submission service, a connected endpoint with spam protection, and a privacy notice explaining how inquiry details are handled.</p><p>No contact email has been published yet.</p></div></aside></div>
  </div>;
}
