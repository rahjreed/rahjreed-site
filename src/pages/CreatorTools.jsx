import CreatorToolCard from '../components/CreatorToolCard';
import PageIntro from '../components/PageIntro';
import { creatorTools } from '../data/creatorTools';

export default function CreatorTools() {
  return <div className="container page-content">
    <PageIntro eyebrow="FREE APPS BY CALLISTA DIGITAL" title={<>CREATOR <span className="gold">TOOLS</span></>}>
      <p>Explore free tools for creators, entrepreneurs, and everyday people. Start with Mr. Prompterson, our free video teleprompter.</p>
    </PageIntro>
    <div className="creator-tool-list">
      {creatorTools.map((tool) => <CreatorToolCard key={tool.id} tool={tool} />)}
    </div>
  </div>;
}
