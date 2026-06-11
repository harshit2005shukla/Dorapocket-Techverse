import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({
  title = "Dorapocket TechVerse — Building Digital Futures",
  description = "Dorapocket TechVerse is a premium technology company delivering AI solutions, SaaS products, full-stack development, and digital transformation for startups, enterprises, and institutions worldwide.",
  image = "https://dorapocket-techverse.com/og-image.jpg",
  url = "https://dorapocket-techverse.com",
  type = "website",
}: SEOProps) {
  const fullTitle = title.includes("Dorapocket") ? title : `${title} | Dorapocket TechVerse`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content="Dorapocket TechVerse, AI Solutions, Software Development, SaaS Development, Full Stack Development, Cloud Services, Digital Transformation, React Development, Next.js, Artificial Intelligence, Enterprise Software" />
      <meta name="author" content="Dorapocket TechVerse" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Dorapocket TechVerse" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@dorapockettech" />

      {/* Additional SEO */}
      <meta name="theme-color" content="#070810" />
      <meta name="msapplication-TileColor" content="#070810" />
    </Helmet>
  );
}
