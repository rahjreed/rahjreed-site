import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { isPlayable } from '../data/games';
import GameArtwork from './GameArtwork';

export function StatusBadge({ game }) {
  return <span className={'status-badge ' + (isPlayable(game) ? 'is-live' : '')}><span aria-hidden="true" />{isPlayable(game) ? 'Playable now' : 'Coming soon'}</span>;
}

export default function GameCard({ game, index = 0, headingLevel = 3 }) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  return <article className={'game-card accent-' + game.accent}>
    <Link to={'/games/' + game.slug} className="game-cover-link" aria-label={'View ' + game.title}>
      <div className="cartridge-top"><span>R2G2 ORIGINAL</span><span>{String(index + 1).padStart(2, '0')}</span></div>
      <div className={'game-cover ' + (game.artworkPresentation === 'official' ? 'official-artwork' : 'crt-surface')}><GameArtwork game={game} sizes="(max-width: 500px) calc(100vw - 42px), (max-width: 800px) 46vw, (max-width: 1300px) 30vw, 395px" /><StatusBadge game={game} /></div>
    </Link>
    <div className="game-card-body">
      <div className="card-meta"><p className="eyebrow game-genre">{game.genre}</p>
      {game.players && <span className="card-players">{game.players}</span>}</div>
      <Heading><Link to={'/games/' + game.slug}>{game.title}</Link></Heading>
      <p>{game.shortDescription}</p>
      <div className="card-actions">
        <Link to={'/games/' + game.slug} className="text-link">Game details <ArrowRight size={15} aria-hidden="true" /></Link>
        {isPlayable(game) && <a className="card-play" data-sound="coin" href={game.playUrl} target="_blank" rel="noopener noreferrer"><Play size={13} fill="currentColor" aria-hidden="true" /> Play Now<span className="sr-only"> {game.title} (opens in a new tab)</span></a>}
      </div>
    </div><div className="cartridge-teeth" aria-hidden="true" />
  </article>;
}
