import React from "react";
import { Helmet } from "react-helmet-async";
import config from "../../configuration";

const SEO = ({
  title,
  description,
  canonicalPath = "",
  type = "website",
  image,
}) => {
  const siteUrl = "https://aman-personal-acc.github.io/namandeep-gilhotra-website";
  const defaultTitle = `${config.profile.name} | Hindu Thinker, Nationalist Poet & Analyst`;
  const defaultDescription =
    "Official portfolio of Naman Deep Gilhotra 'Kranti' — Hindu Thinker, Nationalist Poet, Political Analyst, Cerebral Palsy Survivor, and Founder of Divyang Jagrukta Mission.";
  const defaultImage =
    "https://raw.githubusercontent.com/aman-personal-acc/namandeep-gilhotra-website/main/public/profile.png";

  const fullTitle = title ? `${title} | ${config.profile.name}` : defaultTitle;
  const metaDescription = description || defaultDescription;
  const canonicalUrl = `${siteUrl}${canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`}`;
  const metaImage = image || defaultImage;

  return (
    <Helmet>
      {/* Standard Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter Cards */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
  );
};

export default SEO;
