import { useId, useRef, useState } from 'react';
import { ArrowRight, Check, Coins, Copy, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import ArcadeButton from './ArcadeButton';
import { cashAppHandle, cashAppUrl, supportHeadline, supportMessage } from '../data/support';
import { copyCashAppHandle } from '../utils/copyCashAppHandle';

export default function SupportSection({ showLearnMore = false }) {
  const headingId = useId();
  const [copyState, setCopyState] = useState('idle');
  const handleRef = useRef(null);

  async function copyHandle() {
    setCopyState('copying');
    try {
      await copyCashAppHandle();
      setCopyState('copied');
    } catch {
      setCopyState('failed');
      // Keep a usable manual path if browser permissions prevent clipboard access.
      const selection = window.getSelection();
      if (selection && handleRef.current) {
        const range = document.createRange();
        range.selectNodeContents(handleRef.current);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  }

  return <section className="support-panel" aria-labelledby={headingId}>
    <div className="support-emblem" aria-hidden="true"><Coins size={34} /><span>1UP</span></div>
    <div className="support-content">
      <p className="eyebrow"><Heart size={15} aria-hidden="true" /> PLAYER-POWERED POSSIBILITIES</p>
      <h2 id={headingId}>{supportHeadline}</h2>
      <p className="support-message">{supportMessage}</p>
      <div className="cash-app-handle"><span>Cash App:</span> <code ref={handleRef}>{cashAppHandle}</code></div>
      <div className="support-actions">
        <ArcadeButton href={cashAppUrl} className="cash-app-button">SUPPORT WITH CASH APP</ArcadeButton>
        <ArcadeButton variant="secondary" onClick={copyHandle} disabled={copyState === 'copying'}>
          {copyState === 'copied' ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
          COPY CASH APP HANDLE
        </ArcadeButton>
      </div>
      <p className="copy-feedback" role="status" aria-live="polite" aria-atomic="true">
        {copyState === 'copied' ? 'Copied ' + cashAppHandle + ' to your clipboard.' : copyState === 'failed' ? 'Automatic copy is unavailable. Select and copy ' + cashAppHandle + ' above.' : copyState === 'copying' ? 'Copying handle…' : ''}
      </p>
      {showLearnMore && <Link to="/support" className="text-link">See how your support helps <ArrowRight size={16} aria-hidden="true" /></Link>}
      <p className="support-disclosure">Contributions are voluntary and are not required to play free games. R2G2 is a gaming brand operated by Callista Digital. Contributions are not represented as tax-deductible charitable donations.</p>
    </div>
  </section>;
}
