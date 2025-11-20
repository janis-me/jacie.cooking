import { select } from 'surimi';

import { themes } from '#styles/theme.css.ts';

const themeSwitcher = select('#theme-switcher').style({
  position: 'absolute',
  top: '0',
  right: '16px',
  zIndex: 1000,
});

const themeButton = select('button').style({
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  position: 'relative',
});

themeSwitcher.select('svg').style({
  width: '32px',
  height: '32px',
});

for (const theme of ['pink', 'green', 'blue'] as const) {
  themeButton
    .is(`.${theme}`)
    .style({
      color: themes[theme].surface,
    })
    .select('svg')
    .style({
      filter: 'grayscale(0.4)',
    });

  select(`html:is([data-theme="${theme}"])`).select(`.${theme} svg`).style({
    color: themes[theme].primary,
    filter: 'none',
  });
}
