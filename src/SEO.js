import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";


const Seo = ({ title, description, image, url, lang="cz" }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          defaultTitle
          defaultDescription
          defaultImage
          siteUrl
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.defaultDescription;
  const metaTitle = title || site.siteMetadata.defaultTitle;
  const metaImage = image || site.siteMetadata.defaultImage;
  const metaUrl = url || site.siteMetadata.siteUrl;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      meta={[
        {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: metaTitle,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            property: `og:image`,
            content: metaImage,
          },
          {
            property: `og:url`,
            content: metaUrl,
          },
      ]}
    >
    <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="fbbc4770-b7d2-4c05-bd50-ac5bde9ac34d" data-blockingmode="auto" type="text/javascript"></script>

    </Helmet>
    
  );
};

export default Seo;