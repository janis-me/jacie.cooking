import { color } from 'surimi';

const colorMap = {
  deepWhite: 'hsl(0 0% 100%)',
  white: 'hsl(0 0% 95%)',
  deepBlack: 'hsl(0 0% 0%)',
  black: 'hsl(0 0% 13%)',
  arsenic: 'hsl(204 4% 25%)',
  palePink: 'hsl(19 67% 91%)',
  champagne: 'hsl(18 58% 88%)',
  diamond: 'hsl(208 97% 87%)',
  freshAir: 'hsl(209 100% 84%)',
  artichoke: 'hsl(84 17% 55%)',
  battleshipGray: 'hsl(85 16% 51%)',
} as const;

const baseColors = Object.entries(colorMap).reduce(
  (acc, [key, value]) => {
    acc[key as keyof typeof colorMap] = color(key, value);
    return acc;
  },
  {} as Record<keyof typeof colorMap, ReturnType<typeof color>>,
);

export const themes = {
  pink: {
    primary: baseColors.palePink,
    primaryMuted: `hsl(from ${baseColors.palePink} h s calc(l + 2))`,
    primaryDeep: baseColors.champagne,
    primaryText: baseColors.arsenic,
    primaryTextMuted: `hsl(from ${baseColors.arsenic} h s calc(l + 10))`,
  },
} as const;
