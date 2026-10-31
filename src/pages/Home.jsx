import { ArrowRight, Flame, Gamepad2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ArcadeButton from '../components/ArcadeButton';
import FeaturedGame from '../components/FeaturedGame';
import GameCard from '../components/GameCard';
import { featuredGame, games } from '../data/games';

export default function Home() {
  return <>
    <section className="hero container" id="hero">
      <div className="hero-copy">
        <p className="hero-badge"><Sparkles size={15} aria-hidden="true" /> THE 16-BIT REVIVAL HAS ARRIVED</p>
        <h1><span className="hero-wordmark">R2G2</span>{' '}<span className="hero-brand-name">RAHJ REED GOLDEN GAMES</span></h1>
        <p className="hero-tagline">Custom Retro Games for <span className="learning">Learning</span>, <span className="competition">Competition</span> &amp; <span className="celebration">Celebration</span>.</p>
        <p className="hero-description">The soul of the arcade. A new world of possibilities.<br />Original games that bring knowledge, friendly rivalry, and people together.</p>
        <div className="button-row"><ArcadeButton to="/arcade"><Gamepad2 size={21} aria-hidden="true" /> PLAY THE ARCADE</ArcadeButton><ArcadeButton to="/custom-games" variant="secondary"><Flame size={20} aria-hidden="true" /> CREATE YOUR GAME</ArcadeButton></div>
        <p className="hero-footnote"><span /> RETRO ROOTS. REAL CHALLENGES. NEW ADVENTURES. <span /></p>
      </div>
    </section>
    <FeaturedGame game={featuredGame} />
    <div className="arcade-marquee" aria-hidden="true"><div className="container"><span>LEARN</span><span>✦</span><span>COMPETE</span><span>✦</span><span>CELEBRATE</span><span>✦</span><span>PLAY WITH PURPOSE</span><span>✦</span></div></div>
    <section className="section container" aria-labelledby="library-title">
      <div className="section-heading"><div><p className="eyebrow"><Gamepad2 size={16} aria-hidden="true" /> CHOOSE YOUR NEXT CHALLENGE</p><h2 id="library-title">YOUR NEXT <span className="purple-text">OBSESSION.</span></h2></div><Link className="text-link" to="/arcade">View the arcade <ArrowRight size={17} aria-hidden="true" /></Link></div>
      <p className="section-description">One game ready to play. Four more adventures on the horizon.</p>
      <div className="games-grid">{games.map((game, index) => <GameCard game={game} index={index} key={game.slug} />)}</div>
    </section>
    <section className="container custom-callout"><div className="callout-icon" aria-hidden="true"><Flame size={38} /></div><div><p className="eyebrow">YOUR STORY. YOUR PLAYERS. YOUR GAME.</p><h2>DON’T JUST PLAY.<br /><span className="gold">MAKE IT YOURS.</span></h2><p>Turn your lesson, event, or celebration into a custom retro game.</p></div><ArcadeButton to="/custom-games" variant="secondary">Explore Custom Games <ArrowRight size={17} aria-hidden="true" /></ArcadeButton></section>
    <section className="container purpose-section"><p className="eyebrow">THIS IS RAHJ REED GOLDEN GAMES</p><h2>A little nostalgia.<br /><span className="gold">A lot of possibility.</span></h2><p>We’re bringing the spirit of the 16-bit era to learning, competition, and celebration. Games you can jump into. Experiences you can make your own.</p><Link className="text-link" to="/about">Meet R2G2 <ArrowRight size={16} aria-hidden="true" /></Link></section>
  </>;
}
