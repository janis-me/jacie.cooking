import { select } from 'surimi';

import { theme } from '#styles/theme.css.ts';

const home = select('.home');

home.style({
  backgroundColor: theme.surfaceDeep,
});

home.select('.home-content').style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '20px',
  padding: '40px',
});

home.select('.main-card').style({
  backgroundColor: theme.surface,
  borderRadius: '10px',
  height: '200px',
});
