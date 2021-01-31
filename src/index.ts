import { registerPlugin } from '@capacitor/core';

import type { DaocidiPlugin } from './definitions';

const Daocidi = registerPlugin<DaocidiPlugin>('Daocidi', {
  web: () => import('./web').then(m => new m.DaocidiWeb()),
});

export * from './definitions';
export { Daocidi };
