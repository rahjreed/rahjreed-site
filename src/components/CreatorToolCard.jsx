import ArcadeButton from './ArcadeButton';
import { canLaunchTool } from '../data/creatorTools';

export default function CreatorToolCard({ tool, compact = false }) {
  const { icon: Icon } = tool;
  const Heading = compact ? 'h3' : 'h2';
  const launchable = canLaunchTool(tool);

  return <article className="creator-tool-card">
    <div className="creator-tool-art crt-surface" aria-hidden="true">
      <div className="creator-tool-screen">
        <span className="creator-tool-signal">{tool.visualLabel}</span>
        <Icon size={54} strokeWidth={1.5} />
        <div className="creator-tool-lines"><span /><span /><span /></div>
      </div>
    </div>
    <div className="creator-tool-copy">
      <p className="eyebrow">{tool.category}{!launchable && ' · Coming Soon'}</p>
      <Heading>{tool.name}</Heading>
      {!compact && <p className="creator-tool-headline">{tool.headline}</p>}
      <p className="creator-tool-description">{compact ? tool.summary : tool.description}</p>
      {launchable && <ArcadeButton href={tool.externalUrl}>LAUNCH FREE APP</ArcadeButton>}
      <p className="creator-tool-attribution">A Callista Digital Creation</p>
    </div>
  </article>;
}
