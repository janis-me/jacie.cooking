import { getPreferredColorScheme, getThemeFromLocalstorage, setThemeToDocument } from '@janis.me/themed/js';

const THEME_OPTIONS = ['pink', 'blue', 'green'] as const;

type ThemeOption = (typeof THEME_OPTIONS)[number];

const lsTheme = getThemeFromLocalstorage();

if (lsTheme) {
  if (!THEME_OPTIONS.includes(lsTheme as ThemeOption)) {
    setThemeToDocument('pink');
  } else {
    setThemeToDocument(lsTheme);
  }
} else {
  const preferredTheme = getPreferredColorScheme();
  setThemeToDocument(preferredTheme === 'light' ? 'pink' : 'green');
}
