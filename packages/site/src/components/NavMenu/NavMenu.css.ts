import { select } from 'surimi';

import { cursiveFont } from '#styles/mixins.css.ts';
import { theme } from '#styles/theme.css.ts';

const navMenu = select('#nav-menu').style({
  display: 'flex',
  gap: '15px',
  justifyContent: 'center',
  padding: '10px 0',
  position: 'absolute',
  bottom: 0,
  zIndex: 2,
  width: '100%',
});

navMenu.select('ul').style({
  listStyle: 'none',
  margin: '0',
  padding: '0',
  display: 'flex',
  gap: '15px',
});

const menuItem = navMenu.select('li').style({
  backgroundColor: theme.surface,
  padding: '8px 12px',
});

menuItem.is('.nav-menu-item--active').style({
  backgroundColor: theme.primaryMuted,
});

navMenu.select('a').use(cursiveFont).style({
  textDecoration: 'none',
  color: 'inherit',
  fontWeight: 'bold',
  borderRadius: '5px',
});
