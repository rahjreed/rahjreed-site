import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { games, featuredGame, isPlayable, tagline } from '../src/data/games.js';

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
