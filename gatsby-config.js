module.exports = {
  siteMetadata: {
    title: `Pony express`,
    description: `Bienvenido a Pony express! Heladería y cafetería.`,
    author: `@mjuanfe`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        icon: `src/images/favicon_pony.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-google-spreadsheets',
      options: {
        spreadsheetId: '13hD0bH9yILeil2roPC4yMXKwLNdIGjylqAj_BYObhRw',
        apiKey: 'AIzaSyAIbEUOmzKG26oarbHB9bXKTLFkYtb1rsw',
        // Or 64caa30bb496a28402a7f0e86197cae5d0153c8b antigua  64caa30bb496a28402a7f0e86197cae5d0153c8b
        // https://docs.google.com/spreadsheets/d/e/2PACX-1vQKsp51B4uw6CiEclEk8aMPcA4LlR-IwGtv_uWK3ACHgRPAXyJlAkckm-k0_ojRC07V2pTZnRb_Qx6O/pubhtml
        // https://docs.google.com/spreadsheets/d/13hD0bH9yILeil2roPC4yMXKwLNdIGjylqAj_BYObhRw/edit?usp=sharing
       // credentials: require('./credentials.json')
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
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
