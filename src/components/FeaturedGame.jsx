import { ArrowRight, Gamepad2, Play, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import ArcadeButton from './ArcadeButton';
import { StatusBadge } from './GameCard';
import { isPlayable } from '../data/games';
import GameArtwork from './GameArtwork';

export default function FeaturedGame({ game }) {
  return <section className="featured-showcase container" aria-labelledby="featured-title">
    <div className="featured-panel">
      <div className="featured-art official-artwork">
        <GameArtwork game={game} sizes="(max-width: 800px) calc(100vw - 44px), (max-width: 1200px) 58vw, 650px" priority />
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
