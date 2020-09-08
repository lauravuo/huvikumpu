module.exports = {
  siteMetadata: {
    title: `Omakotitalo | 100 m2 | 4–5 h + avokeittiö + kph | lorem ipsum`,
    description: `Ihana omakotitalo vapautumassa syksyn aikana! lorem ipsum`,
    author: `@vuorenoja`,
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
        name: `huvikumpu`,
        short_name: `huvikumpu`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/heart.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
