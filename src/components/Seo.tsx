import {
  DEFAULT_OG_IMAGE,
  buildCanonical,
  buildTitle,
  getOrganizationJsonLd,
  getWebPageJsonLd,
  getWebSiteJsonLd,
  toAbsoluteUrl,
} from '#app/lib/seo';

type SeoProps = {
  title?: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  includeWebSiteSchema?: boolean;
};

const Seo = ({
  title,
  description,
  path,
  ogImage,
  ogType = 'website',
  includeWebSiteSchema = false,
}: SeoProps) => {
  const pageTitle = buildTitle(title);
  const canonical = buildCanonical(path);
  const imageUrl = toAbsoluteUrl(ogImage ?? DEFAULT_OG_IMAGE);
  const organizationJson = getOrganizationJsonLd();
  const pageJson = getWebPageJsonLd(pageTitle, description, path);
  const websiteJson = includeWebSiteSchema ? getWebSiteJsonLd() : null;

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Teamhore" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJson) }}
      />
      {includeWebSiteSchema && websiteJson ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJson) }}
        />
      ) : null}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJson) }}
      />
    </>
  );
};

export { Seo };
