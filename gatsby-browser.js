/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import "./src/styles/global.css"

export const onInitialClientRender = () => {
    const pathname = window.location.pathname;
    if (pathname === "/") {
      window.location.replace("/Load"); // Přesměrování na landing page
    }
  };

