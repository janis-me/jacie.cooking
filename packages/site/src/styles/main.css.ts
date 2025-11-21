import { select } from 'surimi';

import { cursiveFont } from '#styles/mixins.css';
import { theme } from '#styles/theme.css';

select('*, *::before, *::after').style({
  boxSizing: 'border-box',
});

select('*').style({
  scrollBehavior: 'smooth',
  margin: '0',
});

select('body').style({
  margin: '0',
  padding: '0',
  backgroundColor: theme.surfaceDeep,
  color: theme.primaryText,
  width: '100vw',
  textAlign: 'center',
});

select('h1,h2,h3,h4,h5,h6').use(cursiveFont).style({
  textWrap: 'balance',
  overflowWrap: 'break-word',
});

select('p').style({
  textWrap: 'pretty',
  overflowWrap: 'break-word',
});
