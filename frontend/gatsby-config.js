module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // FIXME This plugin does not support nested introspection of DynamicZone component types which will be a big part of this project.
    //      Support is pending in the next major version release (maybe alongside Strapi v4 - see https://github.com/strapi/gatsby-source-strapi/issues/191#issuecomment-846007145)
    // {
    //   resolve: "gatsby-source-strapi",
    //   options: {
    //     apiURL: process.env.API_URL || "http://localhost:1337",
    //     collectionTypes: ["pages"],
    //     singleTypes: [`global`],
    //     queryLimit: 1000,
    //   },
    // },
    // FIXME Using this plugin instead of `gatsby-source-graphql` due to issue with dynamic component type schemas
    //       Investigate switching back to Strapi plugin once support is added
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'Strapi',
        fieldName: 'strapi',
        url: 'http://localhost:1337/graphql',
      },
    },
    {
      resolve: "gatsby-plugin-typegen",
      options: {
        outputPath: `src/__generated__/gatsby-types.d.ts`,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
