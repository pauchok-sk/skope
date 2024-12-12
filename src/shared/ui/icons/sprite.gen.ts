export interface SpritesMap {
    'sprite': 'close' | 'google' | 'pen'
  }
export const SPRITES_META: {
           [Key in keyof SpritesMap]: {
             filePath: string;
             items: Record<SpritesMap[Key], {
                viewBox: string,
                width: number, height: number,
             }>
           }
         } = {
    'sprite': {
    filePath: 'sprite.f4c85398.svg',
    items: {
      'close': {
    viewBox: '0 0 64 64',
    width: 48, height: 48,
  },
'google': {
    viewBox: '0 0 488 512',
    width: 488, height: 512,
  },
'pen': {
    viewBox: '0 0 256 256',
    width: 341.333, height: 341.333,
  }
    }
}
  };