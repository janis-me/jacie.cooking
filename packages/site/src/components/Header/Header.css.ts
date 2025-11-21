import { keyframes, media, select } from 'surimi';

import { primaryGradientBackground } from '#styles/mixins.css';
import { colors, theme } from '#styles/theme.css';

const wavesAnimation = keyframes('waves').from({ maskPosition: 'left -250px' }).to({ maskPosition: 'right -250px' });
const wavesBounce = keyframes('waves-bounce')
  .from({ transform: 'translateY(0px)' })
  .to({ transform: 'translateY(20px)' });

const header = select('#header').use(primaryGradientBackground);

// Base header styles
header.style({
  backgroundColor: theme.background,
  color: theme.primaryText,
  position: 'sticky',
  top: '0',
  left: '0',
  width: '100%',
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
});

// Header top section (logo or page title)
const headerTop = header.select('.header-top');

headerTop.style({
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'center',
  padding: '20px 20px 0',
  minHeight: '150px',
  transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
});

// When scrolled, make top section compact and horizontal
header.where('.scrolled').select(headerTop).style({
  padding: '15px 20px 10px',
  minHeight: '60px',
  marginBottom: '-40px',
});

// Logo container (only shown when no title)
const logoContainer = headerTop.select('.header-logo-container');

logoContainer.style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const logo = logoContainer.select('.header-logo');

logo.style({
  width: '180px',
  height: 'auto',
  transition: 'width 400ms cubic-bezier(0.4, 0, 0.2, 1)',
});

header.where('.scrolled').select('.header-logo').style({
  width: '70px',
});

header.where('[data-has-title="false"]').select(logo).style({
  marginBottom: '-32px',
});

const headerTopLogoLeft = headerTop.not(':has(> :only-child)');

headerTopLogoLeft.select(logoContainer).style({
  alignSelf: 'start',
  position: 'absolute',
  left: '20px',
});

headerTopLogoLeft.select(logo).style({
  width: '100px',
});

// Page info (title)
const pageInfo = headerTop.select('.header-page-info');

pageInfo.style({
  textAlign: 'center',
  maxWidth: '800px',
  transition: 'opacity 400ms ease',
});

pageInfo.select('h1').style({
  fontWeight: '700',
  margin: '0 0 -16px 0',
  color: colors.gray[700],
});

header.where('.scrolled').select(pageInfo).style({
  opacity: '0',
});

// Waves separator
const waves = header.select('.header-waves');

waves.style({
  position: 'relative',
  width: '100%',
  height: '100px',
  mask: 'url("/hero-waves.svg") repeat-x bottom',
  backgroundColor: theme.surfaceDeep,
  animation: `${wavesAnimation} 30s linear alternate infinite, ${wavesBounce} 2s ease-in-out alternate infinite`,
  transition: 'height 400ms cubic-bezier(0.4, 0, 0.2, 1)',
  flexShrink: 0,
});

// Header bottom section (nav + filters)
const headerBottom = header.select('.header-bottom');

headerBottom.style({
  backgroundColor: theme.surfaceDeep,
  padding: '0 20px 0 0',
  transition: 'padding 400ms cubic-bezier(0.4, 0, 0.2, 1)',
  zIndex: 5,
});

header.where('.scrolled').select(headerBottom).style({
  marginTop: '-8px',
});

const headerBottomInner = select('.header-bottom-inner');

headerBottomInner.style({
  maxWidth: '1400px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '40px',
});

// Nav center (when no filters)
headerBottomInner.select('.header-nav-center').style({
  display: 'flex',
  justifyContent: 'center',
});

// Nav left (when filters present)
headerBottomInner.select('.header-nav-left').style({
  display: 'flex',
  flex: '1',
  justifyContent: 'flex-start',
});

// Filters right (when present)
headerBottomInner.select('.header-filters-right').style({
  display: 'flex',
  flex: '1',
  justifyContent: 'flex-end',
  gap: '12px',
  flexWrap: 'wrap',
});

header.after().style({
  content: "''",
  position: 'absolute',
  bottom: '-80px',
  left: '0',
  width: '100%',
  height: '80px',
  backgroundColor: theme.surfaceDeep,
  clipPath:
    'polygon(100% 0%, 0% 0% , 0.00% 59.67%, 2.00% 59.50%, 4.00% 58.99%, 6.00% 58.16%, 8.00% 57.05%, 10.00% 55.68%, 12.00% 54.12%, 14.00% 52.40%, 16.00% 50.61%, 18.00% 48.79%, 20.00% 47.01%, 22.00% 45.34%, 24.00% 43.84%, 26.00% 42.55%, 28.00% 41.53%, 30.00% 40.81%, 32.00% 40.41%, 34.00% 40.35%, 36.00% 40.64%, 38.00% 41.25%, 40.00% 42.18%, 42.00% 43.38%, 44.00% 44.82%, 46.00% 46.44%, 48.00% 48.19%, 50.00% 50.00%, 52.00% 51.81%, 54.00% 53.56%, 56.00% 55.18%, 58.00% 56.62%, 60.00% 57.82%, 62.00% 58.75%, 64.00% 59.36%, 66.00% 59.65%, 68.00% 59.59%, 70.00% 59.19%, 72.00% 58.47%, 74.00% 57.45%, 76.00% 56.16%, 78.00% 54.66%, 80.00% 52.99%, 82.00% 51.21%, 84.00% 49.39%, 86.00% 47.60%, 88.00% 45.88%, 90.00% 44.32%, 92.00% 42.95%, 94.00% 41.84%, 96.00% 41.01%, 98.00% 40.50%, 100.00% 40.33%)',
});

media().maxWidth('600px').select(headerBottomInner).style({
  flexDirection: 'column',
  gap: '20px',
});
