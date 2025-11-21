import { select } from 'surimi';

import { colors, theme } from '#styles/theme.css';

const recipeDetail = select('.recipe-detail');

recipeDetail.style({
  backgroundColor: theme.background,
  minHeight: '100vh',
});

const recipeArticle = recipeDetail.select('.recipe-article');

recipeArticle.style({
  maxWidth: '900px',
  margin: '0 auto',
  padding: '0',
});

// Header section
const header = recipeArticle.select('.recipe-header');

header.style({
  marginBottom: '40px',
});

header.select('.recipe-cover').style({
  width: '100%',
  height: '400px',
  overflow: 'hidden',
  borderRadius: '0 0 24px 24px',
  marginBottom: '40px',
});

header.select('.recipe-cover img').style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

header.select('.recipe-header-content').style({
  padding: '0 40px',
});

header.select('.recipe-title').style({
  fontSize: '2.5rem',
  fontWeight: '700',
  margin: '0 0 16px 0',
  color: colors.gray[700],
  lineHeight: '1.2',
});

header.select('.recipe-description').style({
  fontSize: '1.3rem',
  margin: '0 0 24px 0',
  color: theme.primaryText,
  lineHeight: '1.6',
});

header.select('.recipe-meta').style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
  alignItems: 'center',
  paddingTop: '16px',
  borderTop: `2px solid ${theme.surfaceDeep}`,
});

header.select('.recipe-meta time').style({
  fontSize: '0.95rem',
  color: theme.primaryTextMuted,
  fontWeight: '500',
});

header.select('.recipe-tags').style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
});

header.select('.recipe-tag').style({
  padding: '6px 14px',
  borderRadius: '16px',
  backgroundColor: theme.surface,
  color: theme.primaryText,
  fontSize: '0.9rem',
  fontWeight: '500',
  textDecoration: 'none',
  transition: 'all 200ms ease',
});

header.select('.recipe-tag:hover').style({
  backgroundColor: theme.primary,
  color: theme.background,
  transform: 'translateY(-2px)',
});

// Content section
const content = recipeArticle.select('.recipe-content');

content.style({
  padding: '0 40px 60px',
  color: theme.primaryText,
  fontSize: '1.1rem',
  lineHeight: '1.8',
});

content.select('h1, h2, h3, h4, h5, h6').style({
  color: theme.primaryTextDeep,
  fontWeight: '700',
  marginTop: '32px',
  marginBottom: '16px',
  lineHeight: '1.3',
});

content.select('h1').style({
  fontSize: '2rem',
});

content.select('h2').style({
  fontSize: '1.75rem',
});

content.select('h3').style({
  fontSize: '1.5rem',
});

content.select('p').style({
  marginBottom: '16px',
});

content.select('ul, ol').style({
  marginBottom: '16px',
  paddingLeft: '24px',
});

content.select('li').style({
  marginBottom: '8px',
});

content.select('img').style({
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '16px',
  margin: '24px 0',
});

content.select('a').style({
  color: theme.primary,
  textDecoration: 'underline',
  transition: 'color 200ms ease',
});

content.select('a:hover').style({
  color: theme.primaryDeep,
});

content.select('code').style({
  backgroundColor: theme.surface,
  padding: '2px 6px',
  borderRadius: '4px',
  fontSize: '0.95em',
  fontFamily: 'monospace',
});

content.select('pre').style({
  backgroundColor: theme.surface,
  padding: '16px',
  borderRadius: '8px',
  overflow: 'auto',
  marginBottom: '16px',
});

content.select('pre code').style({
  backgroundColor: 'transparent',
  padding: '0',
});

content.select('blockquote').style({
  borderLeft: `4px solid ${theme.primary}`,
  paddingLeft: '20px',
  marginLeft: '0',
  marginBottom: '16px',
  fontStyle: 'italic',
  color: theme.primaryTextMuted,
});
