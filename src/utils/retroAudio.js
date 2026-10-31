// A single context is created only after an explicit user gesture and reused
// for the enabled session. Every voice disconnects; muting releases the context.
export function createRetroAudio(AudioContextClass) {
  let context = null;
  const voices = new Set();
  let lastPlayed = -Infinity;

  async function enable() {
    if (!AudioContextClass) throw new Error('Web Audio is unavailable.');
    if (!context || context.state === 'closed') context = new AudioContextClass();
    if (context.state === 'suspended') await context.resume();
  }

  function play(type = 'click') {
    if (!context || context.state !== 'running') return;
    const now = context.currentTime;
    if (now - lastPlayed < 0.065 || voices.size >= 4) return;
    lastPlayed = now;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const duration = type === 'coin' ? 0.24 : 0.08;
    oscillator.type = type === 'coin' ? 'sine' : 'square';
    oscillator.frequency.setValueAtTime(type === 'coin' ? 987.77 : 440, now);
    if (type === 'coin') oscillator.frequency.setValueAtTime(1318.51, now + 0.08);
    else oscillator.frequency.exponentialRampToValueAtTime(660, now + duration);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.035, now + 0.005);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    oscillator.connect(gain);
    gain.connect(context.destination);
    const voice = { oscillator, gain };
    voices.add(voice);
    oscillator.onended = () => {
      oscillator.disconnect();
      gain.disconnect();
      voices.delete(voice);
    };
    oscillator.start(now);
    oscillator.stop(now + duration);
  }

  async function dispose() {
    for (const { oscillator, gain } of voices) {
      oscillator.onended = null;
      try { oscillator.stop(); } catch { /* Voice may have already ended. */ }
      oscillator.disconnect();
      gain.disconnect();
    }
    voices.clear();
    const previous = context;
    context = null;
    lastPlayed = -Infinity;
    if (previous && previous.state !== 'closed') await previous.close();
  }

  return { enable, play, dispose };
}
