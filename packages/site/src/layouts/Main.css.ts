import { select } from 'surimi';

select('main.container').style({
  position: 'relative',
  marginTop: '0',
  transition: 'margin-top 400ms ease',
});

select('body:has(.header.scrolled)').select('main.container').style({
  marginTop: '120px',
});
