import { Check, ArrowLeft, Play } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { games, isPlayable } from '../data/games';
import ArcadeButton from '../components/ArcadeButton';
import GameCard, { StatusBadge } from '../components/GameCard';
import NotFound from './NotFound';

export default function GameDetails() {
  const { slug } = useParams();
  const game = games.find((entry) => entry.slug === slug);
  if (!game) return <NotFound />;
  return <div className="container page-content">
    <Link to="/arcade" className="text-link back-link"><ArrowLeft size={16} aria-hidden="true" /> Back to the arcade</Link>
    <section className={'game-detail accent-' + game.accent}><div className="detail-art"><div className="crt-surface"><img src={game.artwork} alt={game.title + ' original cover illustration'} width="640" height="400" /></div><span className="art-caption">R2G2 COVER ILLUSTRATION</span></div><div className="detail-copy"><StatusBadge game={game} /><p className="eyebrow">{game.genre}{game.players ? ' · ' + game.players : ''}</p><h1>{game.title}</h1><p>{game.description}</p><ul className="feature-list">{game.features.map((feature) => <li key={feature}><Check size={17} aria-hidden="true" /> {feature}</li>)}</ul>{isPlayable(game) ? <><ArcadeButton href={game.playUrl}><Play size={16} fill="currentColor" aria-hidden="true" /> PLAY NOW</ArcadeButton><p className="helper-text">Opens the existing Lion’s Gate game in a new tab. Controls and play instructions are provided inside the game.</p><p className="helper-text">The destination currently displays “{game.destinationName}”.</p></> : <div className="coming-soon-note"><h2>Coming to the arcade.</h2><p>This game is planned and isn’t playable yet. Explore the concept above, or tell us how you’d make it your own.</p><ArcadeButton to={'/contact?game=' + game.slug} variant="secondary">Ask about this game</ArcadeButton></div>}</div></section>
    <section className="detail-more"><div className="section-heading"><div><p className="eyebrow">KEEP EXPLORING</p><h2>MORE FROM THE ARCADE.</h2></div></div><div className="games-grid">{games.filter((entry) => entry.slug !== slug).slice(0, 3).map((entry) => <GameCard key={entry.slug} game={entry} index={games.indexOf(entry)} />)}</div></section>
  </div>;
}
