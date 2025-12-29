const SITE_NAME = 'Teamhore';
const SITE_URL = 'https://teamhore.id';
const DEFAULT_OG_IMAGE = '/logo.svg';

const toAbsoluteUrl = (path: string) => {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  if (path.startsWith('/')) {
    return `${SITE_URL}${path}`;
  }
  return `${SITE_URL}/${path}`;
};

const buildTitle = (title?: string) => {
  if (!title) {
    return `${SITE_NAME} - Partner iklan digital yang rapi dan transparan`;
  }
  return `${title} - ${SITE_NAME}`;
};

const buildCanonical = (path: string) => toAbsoluteUrl(path);

const getOrganizationJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: toAbsoluteUrl(DEFAULT_OG_IMAGE),
});

const getWebSiteJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: toAbsoluteUrl(DEFAULT_OG_IMAGE),
    },
  },
});

const getWebPageJsonLd = (title: string, description: string, path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  description,
  url: buildCanonical(path),
  isPartOf: {
    '@id': `${SITE_URL}/#website`,
  },
});

export {
  SITE_NAME,
  SITE_URL,
  DEFAULT_OG_IMAGE,
  toAbsoluteUrl,
  buildTitle,
  buildCanonical,
  getOrganizationJsonLd,
  getWebPageJsonLd,
  getWebSiteJsonLd,
};
