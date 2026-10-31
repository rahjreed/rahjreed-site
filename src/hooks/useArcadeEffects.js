import { useEffect, useRef, useState } from 'react';
import { createRetroAudio } from '../utils/retroAudio';

export default function useArcadeEffects() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [audioBusy, setAudioBusy] = useState(false);
  const [audioError, setAudioError] = useState('');
  const [crtEnabled, setCrtEnabled] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [motionEnabled, setMotionEnabled] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const audioRef = useRef(null);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const respectPreference = () => {
      setReducedMotion(preference.matches);
      if (preference.matches) setMotionEnabled(false);
    };
    preference.addEventListener('change', respectPreference);
    return () => {
      preference.removeEventListener('change', respectPreference);
      void audioRef.current?.dispose().catch(() => {});
    };
  }, []);

  async function toggleSound() {
    if (audioBusy) return;
    setAudioBusy(true);
    setAudioError('');
    try {
      if (soundEnabled) {
        await audioRef.current?.dispose();
        setSoundEnabled(false);
      } else {
        audioRef.current ||= createRetroAudio(window.AudioContext || window.webkitAudioContext);
        await audioRef.current.enable();
        setSoundEnabled(true);
        audioRef.current.play('coin');
      }
    } catch {
      setSoundEnabled(false);
      setAudioError('Sound is unavailable in this browser. You can keep exploring silently.');
      await audioRef.current?.dispose().catch(() => {});
    } finally {
      setAudioBusy(false);
    }
  }

  function playInteraction(event) {
    if (!soundEnabled) return;
    const control = event.target.closest('a, button');
    if (!control || control.disabled || control.closest('[data-no-sound]')) return;
    audioRef.current?.play(control.dataset.sound || 'click');
  }

  return { soundEnabled, audioBusy, audioError, toggleSound, crtEnabled,
    toggleCrt: () => setCrtEnabled((enabled) => !enabled),
    motionEnabled, reducedMotion, toggleMotion: () => { if (!reducedMotion) setMotionEnabled((enabled) => !enabled); },
    playInteraction };
}
