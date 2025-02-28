import * as migration_20250227_171453_initial from './20250227_171453_initial';
import * as migration_20250228_213620 from './20250228_213620';

export const migrations = [
  {
    up: migration_20250227_171453_initial.up,
    down: migration_20250227_171453_initial.down,
    name: '20250227_171453_initial',
  },
  {
    up: migration_20250228_213620.up,
    down: migration_20250228_213620.down,
    name: '20250228_213620'
  },
];
