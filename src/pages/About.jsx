import { BookOpen, Gamepad2, Trophy, Heart, ArrowRight } from 'lucide-react';
import PageIntro from '../components/PageIntro';
import ArcadeButton from '../components/ArcadeButton';
import { tagline } from '../data/games';

export default function About() {
  return <div className="container page-content">
    <PageIntro eyebrow="RAHJ REED GOLDEN GAMES" title={<>RETRO ROOTS.<br /><span className="gold">REAL CONNECTION.</span></>}><p>{tagline}</p></PageIntro>
    <section className="about-story"><div className="about-emblem" aria-hidden="true"><span>R2G2</span><Gamepad2 size={88} strokeWidth={1.2} /><small>THE GOLDEN ERA. REIMAGINED.</small></div><div><p className="eyebrow">WELCOME TO R2G2</p><h2>Good games bring<br />people together.</h2><p>R2G2 stands for Rahj Reed Golden Games. It’s an arcade built around a simple idea: the joy of retro gaming can make room for learning, friendly competition, and memorable celebrations.</p><p>Inspired by the Sega Genesis and Super Nintendo era, R2G2 pairs the character of 16-bit games with a clear, modern experience. Start with Kingdom Race: The Lion’s Gate, and explore the game concepts coming next.</p><p>For schools, churches, businesses, and private celebrations, custom games offer a way to put your own topic or story into the experience.</p></div></section>
    <section className="section"><p className="eyebrow">WHY WE PLAY</p><h2>MORE THAN A HIGH SCORE.</h2><div className="values-grid">{[[BookOpen, 'Learning', 'Turn knowledge into a challenge that invites another try.'], [Trophy, 'Competition', 'Bring friendly rivalry and shared goals to the game.'], [Heart, 'Celebration', 'Make a story, milestone, or gathering part of the adventure.']].map(([Icon, title, description]) => <article key={title}><Icon size={27} className="gold" aria-hidden="true" /><h3>{title}</h3><p>{description}</p></article>)}</div></section>
    <div className="about-cta"><h2>YOUR NEXT CHALLENGE IS WAITING.</h2><ArcadeButton to="/arcade">Enter the Arcade <ArrowRight size={17} aria-hidden="true" /></ArcadeButton></div>
  </div>;
}
