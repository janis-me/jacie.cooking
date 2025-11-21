import { select } from 'surimi';

import { colors, theme } from '#styles/theme.css';

const recipesPage = select('.recipes-page');

recipesPage.style({
  backgroundColor: theme.surfaceDeep,
  minHeight: '100vh',
});

select('#header.scrolled .page-title').style({
  fontSize: '1.5rem',
});

// Tag filter buttons
const tagButton = select('.tag-button');

tagButton.style({
  padding: '8px 16px',
  borderRadius: '20px',
  border: `2px solid ${theme.primary}`,
  backgroundColor: theme.background,
  color: theme.primaryText,
  fontSize: '0.9rem',
  fontWeight: '500',
  cursor: 'pointer',
  transition: 'all 300ms ease',
  whiteSpace: 'nowrap',
});

select('#header.scrolled .tag-button').style({
  padding: '6px 12px',
  fontSize: '0.8rem',
});

tagButton.where(':hover').style({
  backgroundColor: theme.primary,
  color: theme.background,
  transform: 'translateY(-2px)',
  boxShadow: `0 4px 8px color-mix(in srgb, ${theme.primaryTextDeep} 15%, transparent)`,
});

select('#header.scrolled .tag-button:hover').style({
  transform: 'translateY(-1px)',
});

tagButton.where('.active').style({
  backgroundColor: theme.primary,
  color: theme.background,
  fontWeight: '600',
});

tagButton.where(':focus').style({
  outline: `3px solid ${theme.primaryMuted}`,
  outlineOffset: '2px',
});

// Recipes content section
const recipesContent = recipesPage.select('.recipes-content');

recipesContent.style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '30px',
  padding: '60px 40px',
  maxWidth: '1400px',
  margin: '0 auto',
});

const recipeCard = recipesContent.select('article.recipe-card');

recipeCard.style({
  position: 'relative',
  backgroundColor: theme.surface,
  borderRadius: '16px',
  height: '300px',
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
  margin: '0 0 12px 0',
  color: `color-mix(in srgb, ${theme.background} 95%, ${theme.primaryTextDeep})`,
  textShadow: `0 1px 2px color-mix(in srgb, ${theme.primaryTextDeep} 50%, transparent)`,
  lineHeight: '1.5',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
});

recipeCard.select('.recipe-tags').style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '6px',
});

recipeCard.select('.recipe-tag').style({
  padding: '4px 10px',
  borderRadius: '12px',
  backgroundColor: `color-mix(in srgb, ${theme.background} 90%, transparent)`,
  color: theme.primaryTextDeep,
  fontSize: '0.8rem',
  fontWeight: '500',
  textShadow: 'none',
});

// No results message
const noResults = recipesPage.select('.no-results');

noResults.style({
  textAlign: 'center',
  padding: '60px 40px',
  color: theme.primaryText,
  fontSize: '1.2rem',
});
