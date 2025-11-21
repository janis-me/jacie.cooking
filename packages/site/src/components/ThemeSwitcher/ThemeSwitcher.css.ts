import { select } from 'surimi';

import { themes } from '#styles/theme.css.ts';

const themeSwitcher = select('#theme-switcher').style({
  position: 'fixed',
  top: '30px',
  right: '16px',
  zIndex: 1000,
  transition: 'top 400ms ease',
});

select('html:has(.header.scrolled)').select('#theme-switcher').style({
  top: '24px',
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
