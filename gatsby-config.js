const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Antonio Almena Portfolio',
    siteUrl: 'https://www.almena.io',
  },
  plugins: [
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-transformer-sharp',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-ueno-fix',
      options: {
        postCssPlugins: [
          require(`postcss-preset-env`)({
            stage: 1,
            browsers: '< 1%'
          }),
          require(`cssnano`)
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.almena.io',
        sitemap: 'https://www.almena.io/sitemap.xml',
        policy: [{
                  userAgent: 'Twitterbot',
                  disallow: '*',
                  allow: '/static/*'
                },
                {
                  userAgent: '*',
                  allow: '/'
                }]
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 70,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Antonio Almena',
        short_name: 'Antonio',
        start_url: '/',
        background_color: '#99965b',
        theme_color: '#99965b',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: path.resolve(__dirname, 'src/assets/svg')
        },
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/app-layout/AppLayout.tsx'),
      },
    },
  ],
}
