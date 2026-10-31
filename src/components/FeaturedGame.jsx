import { ArrowRight, Crown, Gamepad2, Play, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import ArcadeButton from './ArcadeButton';
import { StatusBadge } from './GameCard';
import { isPlayable } from '../data/games';

export default function FeaturedGame({ game }) {
  return <section className="featured-showcase container" aria-labelledby="featured-title">
    <div className="featured-panel">
      <div className="featured-art crt-surface">
        <img src={game.artwork} alt="Kingdom Race original cover illustration: a golden gate in a moonlit pixel landscape" width="640" height="400" fetchpriority="high" />
        <div className="featured-art-shade" aria-hidden="true" />
        <div className="featured-art-top"><span className="featured-ribbon"><Crown size={14} aria-hidden="true" /> FEATURED TITLE</span><span className="style-badge">16-BIT ARCADE STYLE</span></div>
        <div className="featured-art-title" aria-hidden="true"><span>THE LION’S GATE</span><strong>KINGDOM<br />RACE</strong><small>KNOW THE WORD. MEET THE CHALLENGE.</small></div>
        <span className="art-label">R2G2 ORIGINAL COVER ART</span>
      </div>
      <div className="featured-info">
        <StatusBadge game={game} />
        <p className="eyebrow">YOUR NEXT CHALLENGE AWAITS</p>
        <h2 id="featured-title">{game.title}</h2>
        <p>{game.shortDescription}</p>
        <div className="game-facts"><span><Gamepad2 size={16} aria-hidden="true" /> Bible trivia combat</span><span><User size={16} aria-hidden="true" /> {game.players}</span></div>
        {isPlayable(game) && <ArcadeButton href={game.playUrl} className="featured-play"><Play size={18} fill="currentColor" aria-hidden="true" /> PLAY NOW</ArcadeButton>}
        <Link to={'/games/' + game.slug} className="text-link">View Details <ArrowRight size={16} aria-hidden="true" /></Link>
      </div>
    </div>
  </section>;
}
