

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 * 
 * 
 * 
 * 
 */
exports.sourceNodes = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
      type SiteSiteMetadata {
        title: String
        description: String
        author: String
        siteUrl: String
        defaultImage: String
      }
  
      type Site {
        siteMetadata: SiteSiteMetadata
      }
    `
    createTypes(typeDefs)
  }
