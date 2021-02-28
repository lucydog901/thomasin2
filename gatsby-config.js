module.exports = {
  siteMetadata: {
    title: `Thomasin Durgin - Rings`,
    description: `Handwrought Metal Rings by Thomasin Durgin`,
    author: `@gatsbyjs`,
    menuLinks: [
    
      {
        name: 'every day',
        link: '/everyday'
      },
      {
        name: 'sculpture',
        link: '/sculpture'
      },
      {
        name: 'unusual',
        link: '/unusual'
      },
      {
        name: 'about',
        link: '/about'
      },
      {
        name: 'coding',
        link: '/splash'
      },
    ]
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        // A selector to set react-modal's app root to, default is `#___gatsby`
        // See http://reactcommunity.org/react-modal/accessibility/#app-element
        appElement: '#___gatsby',

        // Object of props that will be passed to the react-modal container
        // See http://reactcommunity.org/react-modal/#usage
        modalProps: {
          closeTimeoutMS: 500
        },
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

