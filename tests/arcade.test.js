import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { createRetroAudio } from '../src/utils/retroAudio.js';
import { games, featuredGame, isPlayable, tagline } from '../src/data/games.js';

function audioHarness() {
  const instances = [];
  class FakeAudioContext {
    constructor() {
      this.state = 'suspended';
      this.currentTime = 0;
      this.destination = {};
      this.oscillators = [];
      this.gains = [];
      instances.push(this);
    }
    async resume() { this.state = 'running'; }
    async close() { this.state = 'closed'; }
    createOscillator() {
      const node = {
        frequency: { setValueAtTime() {}, exponentialRampToValueAtTime() {} },
        connect() {}, start() {}, stop() { this.stopped = true; },
        disconnect() { this.disconnected = true; },
      };
      this.oscillators.push(node);
      return node;
    }
    createGain() {
      const node = {
        gain: { setValueAtTime() {}, exponentialRampToValueAtTime() {} },
        connect() {}, disconnect() { this.disconnected = true; },
      };
      this.gains.push(node);
      return node;
    }
  }
  return { instances, audio: createRetroAudio(FakeAudioContext) };
}

test('sound has no autoplay and reuses one context across interactions', async () => {
  const { instances, audio } = audioHarness();
  audio.play();
  assert.equal(instances.length, 0);
  await audio.enable();
  await audio.enable();
  audio.play('coin');
  instances[0].currentTime = 0.4;
  audio.play('click');
  assert.equal(instances.length, 1);
  assert.equal(instances[0].oscillators.length, 2);
  await audio.dispose();
});

test('completed voices disconnect and disabling sound closes outstanding resources', async () => {
  const { instances, audio } = audioHarness();
  await audio.enable();
  const context = instances[0];
  audio.play();
  context.oscillators[0].onended();
  assert.equal(context.oscillators[0].disconnected, true);
  assert.equal(context.gains[0].disconnected, true);
  context.currentTime = 1;
  audio.play('coin');
  await audio.dispose();
  assert.equal(context.state, 'closed');
  assert.equal(context.oscillators[1].stopped, true);
  assert.equal(context.oscillators[1].disconnected, true);
  assert.equal(context.gains[1].disconnected, true);
  audio.play();
  assert.equal(context.oscillators.length, 2);
  await audio.dispose();
});

test('rapid repeated clicks are limited, and an enabled new session can recover after mute', async () => {
  const { instances, audio } = audioHarness();
  await audio.enable();
  audio.play();
  audio.play();
  assert.equal(instances[0].oscillators.length, 1);
  await audio.dispose();
  await audio.enable();
  audio.play();
  assert.equal(instances.length, 2);
  assert.equal(instances[1].oscillators.length, 1);
  await audio.dispose();
});

test('unsupported audio fails without creating resources or blocking silent use', async () => {
  const audio = createRetroAudio(undefined);
  await assert.rejects(audio.enable(), /unavailable/);
  assert.doesNotThrow(() => audio.play());
  await audio.dispose();
});

test('the catalog exposes only the approved live game and preserves local artwork and branding', () => {
  assert.equal(games.length, 5);
  assert.equal(new Set(games.map(game => game.slug)).size, 5);
  assert.equal(games.filter(isPlayable).length, 1);
  assert.equal(featuredGame.slug, 'kingdom-race');
  assert.equal(featuredGame.players, '1 player');
  assert.equal(featuredGame.playUrl, 'https://lionsgate.callistadigital.com/');
  assert.equal(games.filter(game => game.status === 'coming-soon').length, 4);
  assert.equal(tagline, 'Custom Retro Games for Learning, Competition & Celebration.');
  for (const game of games) {
    assert.match(game.slug, /^[a-z0-9-]+$/);
    assert.ok(existsSync(new URL('../public' + game.artwork, import.meta.url)));
    if (!isPlayable(game)) assert.equal(game.playUrl, undefined);
  }
});
