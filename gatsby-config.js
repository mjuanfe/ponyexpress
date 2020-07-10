module.exports = {
  siteMetadata: {
    title: `Pony express`,
    description: `Bienvenido a Pony express! Heladería y cafetería.`,
    author: `@mjuanfe`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pony Express Web App`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#3a5a56`,
        theme_color: `#3a5a56`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '13hD0bH9yILeil2roPC4yMXKwLNdIGjylqAj_BYObhRw',
          worksheetTitle: 'principal',
          credentials: require('./credentials.json')
      }
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '13hD0bH9yILeil2roPC4yMXKwLNdIGjylqAj_BYObhRw',
          worksheetTitle: 'Copas',
          credentials: require('./credentials.json')
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/ // See below to configure properly
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
