import { select } from 'surimi';

import { cursiveFont } from '#styles/mixins.css';
import { theme } from '#styles/theme.css';

select('body').style({
  margin: '0',
  padding: '0',
  backgroundColor: theme.surfaceDeep,
  color: theme.primaryText,
  width: '100vw',
  textAlign: 'center',
});

select('h1,h2,h3,h4,h5').use(cursiveFont);
