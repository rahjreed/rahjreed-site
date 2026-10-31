import { Monitor, Pause, Play, Volume2, VolumeX } from 'lucide-react';

export default function ArcadeControls({ effects }) {
  const { soundEnabled, audioBusy, audioError, toggleSound, crtEnabled, toggleCrt, motionEnabled, reducedMotion, toggleMotion } = effects;
  return <div className="effects-bar">
    <div className="container effects-inner">
      <span className="console-label"><span className="tiny-dot" /> ARCADE SETTINGS</span>
      <div className="effects-controls" role="group" aria-label="Arcade effects" data-no-sound>
        <button type="button" aria-pressed={soundEnabled} onClick={toggleSound} disabled={audioBusy} aria-label="Retro sound">
          {soundEnabled ? <Volume2 size={15} aria-hidden="true" /> : <VolumeX size={15} aria-hidden="true" />}<span>SOUND {soundEnabled ? 'ON' : 'OFF'}</span>
        </button>
        <button type="button" aria-pressed={crtEnabled} onClick={toggleCrt} aria-label="CRT scanlines"><Monitor size={15} aria-hidden="true" /><span>CRT {crtEnabled ? 'ON' : 'OFF'}</span></button>
        <button type="button" aria-pressed={motionEnabled} onClick={toggleMotion} disabled={reducedMotion} aria-label="Background motion" aria-describedby={reducedMotion ? 'motion-preference-note' : undefined}>
          {motionEnabled ? <Pause size={14} aria-hidden="true" /> : <Play size={14} aria-hidden="true" />}<span>MOTION {motionEnabled ? 'ON' : 'OFF'}</span>
        </button>
      </div>
      {reducedMotion && <span id="motion-preference-note" className="sr-only">Motion is off to respect your system’s reduced-motion preference.</span>}
    </div>
    {audioError && <p className="effects-error container" role="status">{audioError}</p>}
  </div>;
}
