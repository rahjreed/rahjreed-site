import test from 'node:test';
import assert from 'node:assert/strict';
import { customGamePackages, adjustmentStartingPrice, formatPrice } from '../src/data/pricing.js';
import { cashAppHandle, cashAppUrl } from '../src/data/support.js';
import { copyCashAppHandle } from '../src/utils/copyCashAppHandle.js';

test('approved package prices and maintenance distinguish customization from original development', () => {
  assert.deepEqual(customGamePackages.map(({ id, creationPrice, monthlyMaintenance }) =>
    ({ id, creationPrice, monthlyMaintenance })), [
    { id: 'organizational', creationPrice: 997, monthlyMaintenance: 50 },
    { id: 'personal', creationPrice: 997, monthlyMaintenance: 15 },
    { id: 'original', creationPrice: 4500, monthlyMaintenance: null },
  ]);
  assert.equal(adjustmentStartingPrice, 100);
  assert.equal(formatPrice(customGamePackages[2].creationPrice), '$4,500');
  assert.equal(customGamePackages[0].engineType, 'Existing R2G2 game engine');
  assert.equal(customGamePackages[1].engineType, 'Existing R2G2 game engine');
  assert.equal(customGamePackages[2].engineType, 'Original game development');
  assert.equal(new Set(customGamePackages.map(offer => offer.id)).size, 3);
});

test('copy writes the literal handle once and awaits clipboard completion', async () => {
  let written;
  let writes = 0;
  await copyCashAppHandle({ async writeText(value) { written = value; writes += 1; } });
  assert.equal(written, '$rahjreed');
  assert.equal(writes, 1);
  assert.equal(cashAppHandle, '$rahjreed');
  assert.equal(cashAppUrl, 'https://cash.app/$rahjreed');
  assert.equal(new URL(cashAppUrl).pathname, '/' + cashAppHandle);
});

test('blocked or missing clipboard access fails instead of claiming a successful copy', async () => {
  await assert.rejects(copyCashAppHandle({}), /unavailable/);
  const denied = new Error('Permission denied');
  await assert.rejects(copyCashAppHandle({ async writeText() { throw denied; } }), denied);
});
