import { cashAppHandle } from '../data/support.js';

export async function copyCashAppHandle(clipboard = globalThis.navigator?.clipboard) {
  if (!clipboard?.writeText) throw new Error('Clipboard access is unavailable.');
  await clipboard.writeText(cashAppHandle);
}
