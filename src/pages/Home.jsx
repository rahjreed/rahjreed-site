import { ArrowRight, Gamepad2, Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ArcadeButton from '../components/ArcadeButton';
import GameCard, { StatusBadge } from '../components/GameCard';
import { featuredGame, games, isPlayable, tagline } from '../data/games';

export default function Home() {
  return <>
    <section className="hero container">
      <div className="hero-copy">
        <p className="eyebrow"><span className="tiny-dot" /> WELCOME TO THE GOLDEN ERA. REIMAGINED.</p>
        <h1>GREAT GAMES.<br /><span>GREATER</span><br /><span className="outline-word">PURPOSE.</span><span className="title-pixel" aria-hidden="true" /></h1>
        <p className="hero-tagline">{tagline}</p>
        <p className="hero-description">Old-school soul. A whole new way to play. Discover original retro-inspired games that bring knowledge, friendly rivalry, and people together.</p>
        <div className="button-row"><ArcadeButton to="/arcade"><Gamepad2 size={19} aria-hidden="true" /> Explore the Arcade</ArcadeButton><Link className="text-link hero-secondary" to="/custom-games">Create your own game <ArrowRight size={16} aria-hidden="true" /></Link></div>
        <div className="hero-footnote"><span className="pixel-mini" aria-hidden="true">＋</span><span>INSPIRED BY THE CLASSICS. MADE FOR WHAT’S NEXT.</span></div>
      </div>
      <div className="featured-machine">
        <div className="machine-top"><span><span className="tiny-dot" /> NOW FEATURING</span><span>R2G2 / 001</span></div>
        <div className="featured-screen"><img src={featuredGame.artwork} alt="Original pixel-style cover art: a golden castle gate beneath a moonlit mountain sky" width="640" height="400" fetchpriority="high" /><div className="screen-title"><span>THE LION’S GATE</span><h2>KINGDOM<br />RACE</h2><span className="screen-subtitle">KNOW THE WORD. MEET THE CHALLENGE.</span></div></div>
        <div className="machine-bottom"><div><StatusBadge game={featuredGame} /><p>Bible trivia meets arcade combat.</p></div>{isPlayable(featuredGame) ? <ArcadeButton href={featuredGame.playUrl}><Play size={16} fill="currentColor" aria-hidden="true" /> Play Game</ArcadeButton> : <ArcadeButton to={'/games/' + featuredGame.slug}>Game details</ArcadeButton>}</div>
        <Link className="featured-details" to={'/games/' + featuredGame.slug}>Discover Kingdom Race <ArrowRight size={14} aria-hidden="true" /></Link>
      </div>
    </section>
    <div className="arcade-marquee" aria-hidden="true"><div className="container"><span>LEARN</span><span>✦</span><span>COMPETE</span><span>✦</span><span>CELEBRATE</span><span>✦</span><span>PLAY WITH PURPOSE</span><span>✦</span></div></div>
    <section className="section container" aria-labelledby="library-title">
      <div className="section-heading"><div><p className="eyebrow">CHOOSE YOUR NEXT CHALLENGE</p><h2 id="library-title">THE GAME LINEUP<span className="gold">.</span></h2></div><Link className="text-link" to="/arcade">View the arcade <ArrowRight size={17} aria-hidden="true" /></Link></div>
      <p className="section-description">One game ready to play. Four more adventures on the horizon.</p>
      <div className="games-grid">{games.map((game, index) => <GameCard game={game} index={index} key={game.slug} />)}</div>
    </section>
    <section className="container custom-callout"><div className="callout-icon" aria-hidden="true"><Sparkles size={38} /></div><div><p className="eyebrow">YOUR STORY. YOUR PLAYERS. YOUR GAME.</p><h2>MAKE IT PERSONAL.</h2><p>Turn your lesson, event, or celebration into a custom retro game.</p></div><ArcadeButton to="/custom-games" variant="secondary">Explore Custom Games <ArrowRight size={17} aria-hidden="true" /></ArcadeButton></section>
    <section className="container purpose-section"><p className="eyebrow">THIS IS RAHJ REED GOLDEN GAMES</p><h2>A little nostalgia.<br /><span className="gold">A lot of possibility.</span></h2><p>We’re bringing the spirit of the 16-bit era to learning, competition, and celebration. Games you can jump into. Experiences you can make your own.</p><Link className="text-link" to="/about">Meet R2G2 <ArrowRight size={16} aria-hidden="true" /></Link></section>
  </>;
}
