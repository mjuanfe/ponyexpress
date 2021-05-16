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
        icon: `src/images/favicon_pony.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '13hD0bH9yILeil2roPC4yMXKwLNdIGjylqAj_BYObhRw',
          worksheetTitle: 'Principal',
          credentials: require('./credentials.json')
      }
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '13hD0bH9yILeil2roPC4yMXKwLNdIGjylqAj_BYObhRw',
          worksheetTitle: 'Tarricugof',
          credentials: require('./credentials.json')
      }
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '13hD0bH9yILeil2roPC4yMXKwLNdIGjylqAj_BYObhRw',
          worksheetTitle: 'Sabores',
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-173483108-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        //anonymize: true,
        // Setting this parameter is also optional
        //respectDNT: true,
        // Avoids sending pageview hits from custom paths
        //exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        //pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
       // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
       // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
       // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        //defer: false,
        // Any additional optional fields
        //sampleRate: 5,
        //siteSpeedSampleRate: 10,
        //cookieDomain: "example.com",
      },
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
};


/*
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

GATSBY_GRAPHQL_IDE=playground
*/