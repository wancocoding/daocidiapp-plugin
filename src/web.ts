import { WebPlugin } from '@capacitor/core';

import type { DaocidiPlugin } from './definitions';

export class DaocidiWeb extends WebPlugin implements DaocidiPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
