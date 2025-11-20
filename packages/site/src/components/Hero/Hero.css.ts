import { keyframes, select } from 'surimi';

import { primaryGradientBackground } from '#styles/mixins.css';
import { theme } from '#styles/theme.css';

const wavesAnimation = keyframes('waves').from({ translate: 0 }).to({ translate: '-70%' });
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

hero.select('.hero-logo').style({
  width: '200px',
  height: 'min-content',
  margin: '15vh auto 0 auto',
  animation: `${logoAnimation} 500ms ease-out forwards`,
});

const waves = hero.select('.hero-waves').style({
  color: theme.surfaceDeep,
  position: 'absolute',
  bottom: '0',
  left: '0',
  marginBottom: '-10vh',
  width: '100%',
});

waves.select('svg').style({
  display: 'block',
  width: '500%',
  animation: `${wavesAnimation} 30s linear alternate infinite, ${wavesBounce} 2s ease-in-out alternate infinite`,
});
