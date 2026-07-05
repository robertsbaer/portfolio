import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface SeoProps {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  image: string;
  schemaMarkup?: object;
}

const Seo = ({
  title,
  description,
  keywords,
  canonical,
  image,
  schemaMarkup,
}: SeoProps) => {
  const { i18n } = useTranslation();

  return (
    <Helmet htmlAttributes={{ lang: i18n.language }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph for Facebook, LinkedIn */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={i18n.language} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Hreflang tags */}
      <link rel="alternate" href={canonical} hrefLang="en" />
      <link rel="alternate" href={canonical} hrefLang="fr" />
      <link rel="alternate" href={canonical} hrefLang="x-default" />

      {/* Structured Data (Schema Markup) */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
};

export default Seo;
