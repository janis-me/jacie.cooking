import { color, select } from 'surimi';

function camelCaseToKebabCase(str: string) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase();
}

export const colors = {
  gray: {
    50: '#f2f2f2',
    100: '#e6e6e6',
    200: '#d9d9d9',
    300: '#bfbfbf',
    400: '#a6a6a6',
    500: '#8c8c8c',
    600: '#737373',
    700: '#3d4042',
    800: '#262626',
    900: '#212121',
  },
  pink: {
    100: '#f7e2d9',
    150: '#f2d9cf',
    200: '#ecd0c6',
    250: '#e4c8be',
    300: '#dfbfb4',
    400: '#c9917a',
    500: '#b97862',
    550: '#ad674e',
    600: '#985b46',
    650: '#834f3d',
    700: '#6e4233',
    750: '#59362a',
    800: '#442a21',
    850: '#2f1d17',
    900: '#1b110d',
  },
  blue: {
    100: '#bee0fe',
    150: '#add8ff',
    200: '#9ccfff',
    250: '#8ac6ff',
    300: '#79bdff',
    400: '#1990ff',
    500: '#0e85f9',
    550: '#0777e4',
    600: '#0869c7',
    650: '#085bab',
    700: '#084c8f',
    750: '#073e73',
    800: '#063058',
    850: '#05213d',
    900: '#031323',
  },
  green: {
    400: '#90a079',
    450: '#85966e',
    500: '#7a8b63',
    550: '#6f8058',
    600: '#64754d',
    650: '#556342',
    700: '#465137',
    750: '#37402b',
    800: '#282e20',
    850: '#191d14',
    900: '#0a0b08',
  },
} as const;

export const themes = {
  pink: {
    primary: colors.pink[500],
    primaryDeep: colors.pink[700],
    primaryMuted: colors.pink[400],
    primaryText: colors.green[800],
    primaryTextDeep: colors.green[900],
    primaryTextMuted: colors.green[600],
    background: colors.pink[100],
    backgroundDeep: colors.pink[300],
    surface: colors.pink[150],
    surfaceDeep: colors.pink[250],
    border: colors.pink[600],
  },
  blue: {
    primary: colors.blue[500],
    primaryDeep: colors.blue[700],
    primaryMuted: colors.blue[400],
    primaryText: colors.gray[800],
    primaryTextDeep: colors.gray[900],
    primaryTextMuted: colors.gray[600],
    background: colors.blue[100],
    backgroundDeep: colors.blue[300],
    surface: colors.blue[150],
    surfaceDeep: colors.blue[250],
    border: colors.blue[600],
  },
  green: {
    primary: colors.green[500],
    primaryDeep: colors.green[700],
    primaryMuted: colors.green[400],
    primaryText: colors.gray[800],
    primaryTextDeep: colors.gray[900],
    primaryTextMuted: colors.gray[600],
    background: colors.green[400],
    backgroundDeep: colors.green[600],
    surface: colors.green[450],
    surfaceDeep: colors.green[550],
    border: colors.green[600],
  },
} as const;

type Theme<TVal> = {
  [key in keyof (typeof themes)['pink']]: TVal;
};

/**
 * Returns
 */
function getThemeColors(theme: Theme<string>) {
  return Object.fromEntries(
    Object.entries(theme).map(([key, value]) => [`--theme-${camelCaseToKebabCase(key)}`, value]),
  );
}

export const theme = Object.fromEntries(
  Object.entries(themes.pink).map(([key, value]) => [key, color(`--theme-${camelCaseToKebabCase(key)}`, value)]),
) as Theme<ReturnType<typeof color>>;

const themeContainer = select('html');

for (const theme of Object.keys(themes)) {
  themeContainer.where(`[data-theme="${theme}"]`).style(getThemeColors(themes[theme as keyof typeof themes]));
}
