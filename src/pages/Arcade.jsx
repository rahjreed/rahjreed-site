import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import PageIntro from '../components/PageIntro';
import GameCard from '../components/GameCard';
import { games, isPlayable } from '../data/games';

export default function Arcade() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const visibleGames = games.filter((game) => (filter === 'all' || (filter === 'playable' ? isPlayable(game) : !isPlayable(game))) && (game.title + ' ' + game.genre + ' ' + game.description).toLowerCase().includes(query.trim().toLowerCase()));
  return <div className="container page-content">
    <PageIntro eyebrow="THE R2G2 ARCADE" title={<>CHOOSE YOUR<br /><span className="gold">NEXT ADVENTURE.</span></>}><p>Discover your next challenge, revisit a favorite, or see what’s coming to the arcade.</p></PageIntro>
    <div className="library-toolbar"><div className="filter-group" role="group" aria-label="Filter games by availability"><SlidersHorizontal size={16} aria-hidden="true" />{[['all', 'All games'], ['playable', 'Playable now'], ['coming-soon', 'Coming soon']].map(([value, label]) => <button key={value} type="button" aria-pressed={filter === value} onClick={() => setFilter(value)}>{label}</button>)}</div><label className="search-field"><Search size={18} aria-hidden="true" /><span className="sr-only">Search games</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find your game…" /></label></div>
    <p className="results-count" role="status">{visibleGames.length} {visibleGames.length === 1 ? 'game' : 'games'} in your lineup</p>
    {visibleGames.length ? <div className="games-grid">{visibleGames.map((game) => <GameCard key={game.slug} game={game} index={games.indexOf(game)} headingLevel={2} />)}</div> : <div className="empty-state"><h2>No games found.</h2><p>Try another search or reset your filters.</p><button className="arcade-button button-secondary" type="button" onClick={() => { setQuery(''); setFilter('all'); }}>Reset filters</button></div>}
  </div>;
}
