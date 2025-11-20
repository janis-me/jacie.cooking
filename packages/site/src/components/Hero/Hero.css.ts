import { keyframes, select } from 'surimi';

import { primaryGradientBackground } from '#styles/mixins.css';
import { theme } from '#styles/theme.css';

const wavesAnimation = keyframes('waves').from({ maskPosition: 'bottom left' }).to({ maskPosition: 'bottom right' });
const wavesBounce = keyframes('waves-bounce')
  .from({ transform: 'translateY(0px)' })
  .to({ transform: 'translateY(20px)' });

const logoAnimation = keyframes('logo-bounce')
  .from({ transform: 'translateY(50px)' })
  .to({ transform: 'translateY(0)' });

const hero = select('#hero').use(primaryGradientBackground);

hero.style({
  backgroundColor: theme.background,
  color: theme.primaryText,
  position: 'relative',
  height: '40vh',
  overflow: 'hidden',
});

hero.select('.hero-content').style({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

hero.select('.hero-logo').style({
  width: '200px',
  height: 'min-content',
  position: 'absolute',
  top: '10vh',
  animation: `${logoAnimation} 500ms ease-out forwards`,
});

const waves = hero.select('.hero-waves').style({
  position: 'absolute',
  bottom: '0',
  left: '0',
  width: '100%',
  height: '200px',
  mask: 'url("/hero-waves.svg") repeat-x bottom',
  backgroundColor: theme.surfaceDeep,
  animation: `${wavesAnimation} 30s linear alternate infinite, ${wavesBounce} 2s ease-in-out alternate infinite`,
});
