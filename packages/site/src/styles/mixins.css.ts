import { style } from 'surimi';

import { theme } from './theme.css';

export const cursiveFont = style({
  fontFamily: '"Lily Script One", cursive',
});

export const primaryGradientBackground = style({
  background: `linear-gradient(0deg, ${theme.background} 0%, ${theme.surfaceDeep} 100%)`,
});
