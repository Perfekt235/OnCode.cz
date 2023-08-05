/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    defaultTitle: `WebDesign Studio`,
    defaultDescription: `Jsme Webdesign studio zaměřené na marketing.`,
    defaultImage: null, // nahraďte "/cesta/do/vašeho/výchozího/obrázku.jpg" skutečnou cestou k obrázku
    siteUrl: `https://barbergirl.netlify.app/`, // nahraďte "https://www.vaše-webová-stránka.cz" skutečnou adresou vaší webové stránky
    author: `Vaše jméno nebo název společnosti`, // nahraďte "Vaše jméno nebo název společnosti" skutečným jménem nebo názvem společnosti
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto', 'Roboto Slab', 'Roboto Mono']
        }
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    
    
    
  ],
}