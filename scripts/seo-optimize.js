import fs from 'fs';
import path from 'path';

// Primary target keywords for Washington DC web developer
const primaryKeywords = [
  'DC web developer',
  'Washington DC web developer',
  'React developer DC',
  'political website developer DC',
  'NGO website developer DC',
  'DC frontend developer',
  'Washington DC React developer',
  'DC political campaign websites',
  'Washington DC mobile app developer',
  'DC nonprofit web development'
];

// Secondary keywords and long-tail phrases
const secondaryKeywords = [
  'custom React websites Washington DC',
  'political campaign web development DC',
  'nonprofit website services DC',
  'React Native app developer DC',
  'Washington DC association websites',
  'DC metro area web developer',
  'affordable web development DC',
  'responsive website design DC',
  'DC government contractor web developer',
  'Washington DC tech consultant'
];

// Local SEO terms
const localSEOTerms = [
  'web developer near me DC',
  'local React developer Washington DC',
  'best web developer in DC',
  'top-rated website developer DC',
  'DC Capitol Hill web services',
  'Georgetown web developer',
  'Dupont Circle website services',
  'Washington DC tech district developer',
  'DMV area web development',
  'Northern Virginia web developer'
];

// Generate optimized title (50-60 characters)
const generateTitle = () => {
  return 'DC Web Developer | React & Political Websites | Robert Baer';
};

// Generate optimized meta description (120-160 characters)
const generateDescription = () => {
  return 'Washington DC web developer specializing in React, political campaigns & NGO websites. Custom solutions for organizations in the DC metro area.';
};

// Generate optimized keywords meta tag
const generateKeywords = () => {
  const allKeywords = [...primaryKeywords, ...secondaryKeywords.slice(0, 5), ...localSEOTerms.slice(0, 5)];
  return allKeywords.join(', ');
};

// Update the index.html file with optimized SEO tags
const updateIndexHTML = () => {
  const indexPath = path.resolve('index.html');
  let content = fs.readFileSync(indexPath, 'utf8');
  
  // Update title
  content = content.replace(
    /<title>.*?<\/title>/,
    `<title>${generateTitle()}</title>`
  );
  
  // Update meta description
  content = content.replace(
    /<meta name="description" content=".*?">/,
    `<meta name="description" content="${generateDescription()}">`
  );
  
  // Update keywords
  content = content.replace(
    /<meta name="keywords" content=".*?">/,
    `<meta name="keywords" content="${generateKeywords()}">`
  );
  
  // Add canonical tag if missing
  if (!content.includes('<link rel="canonical"')) {
    const canonicalTag = '<link rel="canonical" href="https://dcmademedia.com/">';
    content = content.replace(
      '</head>',
      `  ${canonicalTag}\n</head>`
    );
  }
  
  fs.writeFileSync(indexPath, content);
  console.log('✅ index.html updated with optimized SEO tags');
};

// Update sitemap.xml with current date
const updateSitemap = () => {
  const sitemapPath = path.resolve('public/sitemap.xml');
  let content = fs.readFileSync(sitemapPath, 'utf8');
  
  const today = new Date().toISOString().split('T')[0];
  content = content.replace(
    /<lastmod>.*?<\/lastmod>/,
    `<lastmod>${today}</lastmod>`
  );
  
  fs.writeFileSync(sitemapPath, content);
  console.log('✅ sitemap.xml updated with current date');
};

// Main function
const main = () => {
  try {
    updateIndexHTML();
    updateSitemap();
    console.log('SEO optimization completed successfully!');
    console.log('Recommended next steps:');
    console.log('1. Add more text content to your site (aim for 1000+ words)');
    console.log('2. Implement an analytics tool like Google Analytics');
    console.log('3. Create more backlinks from relevant DC-based websites');
  } catch (error) {
    console.error('Error during SEO optimization:', error);
  }
};

main();