export default function GameArtwork({ game, sizes, priority = false }) {
  return <img
    src={game.artwork}
    srcSet={game.artworkSrcSet}
    sizes={game.artworkSrcSet ? sizes : undefined}
    alt={game.artworkAlt || game.shortTitle + ' cover illustration'}
    width={game.artworkWidth || 640}
    height={game.artworkHeight || 400}
    loading={priority ? 'eager' : 'lazy'}
    fetchpriority={priority ? 'high' : undefined}
  />;
}
