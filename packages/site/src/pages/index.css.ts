import { select } from 'surimi';

import { theme } from '#styles/theme.css.ts';

const home = select('.home');

home.style({
  backgroundColor: theme.surfaceDeep,
});

home.select('.home-content').style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '30px',
  padding: '60px 40px',
  maxWidth: '1400px',
  margin: '0 auto',
  zIndex: 1,
});

const recipeCard = home.select('article.recipe-card');

recipeCard.style({
  position: 'relative',
  backgroundColor: theme.surface,
  borderRadius: '16px',
  height: '280px',
  textAlign: 'left',
  overflow: 'hidden',
  boxShadow: `0 4px 12px color-mix(in srgb, ${theme.primaryTextDeep} 12%, transparent)`,
  transition: 'transform 300ms ease, box-shadow 300ms ease',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

recipeCard.where(':hover').style({
  boxShadow: `0 12px 24px color-mix(in srgb, ${theme.primaryTextDeep} 20%, transparent)`,
  transform: 'translateY(-8px) scale(1.02)',
});

recipeCard.select('.recipe-link').style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  height: '100%',
  padding: '24px',
  textDecoration: 'none',
  color: 'inherit',
  position: 'relative',
  background: `linear-gradient(to top, color-mix(in srgb, ${theme.primaryTextDeep} 85%, transparent) 0%, color-mix(in srgb, ${theme.primaryTextDeep} 50%, transparent) 50%, transparent 100%)`,
});

recipeCard.select('.recipe-title').style({
  fontSize: '1.5rem',
  fontWeight: '700',
  margin: '0 0 8px 0',
  color: theme.background,
  textShadow: `0 2px 4px color-mix(in srgb, ${theme.primaryTextDeep} 40%, transparent)`,
  lineHeight: '1.3',
});

recipeCard.select('.recipe-description').style({
  fontSize: '0.95rem',
  margin: '0',
  color: `color-mix(in srgb, ${theme.background} 95%, ${theme.primaryTextDeep})`,
  textShadow: `0 1px 2px color-mix(in srgb, ${theme.primaryTextDeep} 50%, transparent)`,
  lineHeight: '1.5',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
});

// Bottom wavy section
const bottomSection = home.select('.bottom-section');

bottomSection.style({
  position: 'relative',
  backgroundColor: theme.background,
  paddingTop: '100px',
  paddingBottom: '60px',
  marginTop: '40px',
});

bottomSection.select('.bottom-waves').style({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100px',
  mask: 'url("/hero-waves.svg") repeat-x top',
  backgroundColor: theme.surfaceDeep,
  transform: 'rotate(180deg)',
});

bottomSection.select('.bottom-content').style({
  maxWidth: '800px',
  margin: '0 auto',
  padding: '0 40px',
  textAlign: 'center',
  color: theme.primaryText,
});

bottomSection.select('.bottom-content h2').style({
  fontSize: '2rem',
  fontWeight: '700',
  marginBottom: '16px',
  color: theme.primaryTextDeep,
});

bottomSection.select('.bottom-content p').style({
  fontSize: '1.1rem',
  lineHeight: '1.8',
  color: theme.primaryText,
  marginBottom: '12px',
});
