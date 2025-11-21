import { select } from 'surimi';

import { cursiveFont } from '#styles/mixins.css.ts';
import { theme } from '#styles/theme.css.ts';

const navMenu = select('#nav-menu').style({
  display: 'flex',
  gap: '15px',
  justifyContent: 'center',
});

navMenu.select('ul').style({
  listStyle: 'none',
  margin: '0',
  padding: '0',
  display: 'flex',
  gap: '15px',
  flexWrap: 'wrap',
});

const menuItem = navMenu.select('li').style({
  backgroundColor: theme.surface,
  padding: '8px 14px',
  transition: 'all 300ms ease',
});

select('#header.scrolled #nav-menu li').style({
  padding: '6px 12px',
});

menuItem.style({
  border: `4px solid ${theme.surfaceDeep}`,
});

menuItem.is('.nav-menu-item--active').style({
  backgroundColor: theme.primaryMuted,
});

navMenu.select('a').use(cursiveFont).style({
  textDecoration: 'none',
  color: 'inherit',
  fontWeight: 'bold',
  borderRadius: '5px',
  fontSize: '1rem',
  transition: 'font-size 300ms ease',
});

select('#header.scrolled #nav-menu a').style({
  fontSize: '0.9rem',
});
