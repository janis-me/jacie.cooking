import { select } from 'surimi';

import { cursiveFont } from '#styles/mixins.css';
import { themes } from '#styles/theme.css';

select('body').style({
  margin: '0',
  padding: '0',
  backgroundColor: themes.pink.primaryDeep,
  color: themes.pink.primaryText,
  width: '100vw',
  textAlign: 'center',
});

select('h1').use(cursiveFont);
