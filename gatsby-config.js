module.exports = {
  siteMetadata: {
    title: "Kevin Kowalski | Web Develeoper & Designer",
    titleTemplate: "%s | Kevin Kowalski - Web Developer",
    description: "Kevin Kowalski is a web designer and developer for hire. Check out some of my latest work or reach out and start a project!",
    siteUrl: "https://kevinkowalski.dev"
  },
  trailingSlash: "always",
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-76756923-1",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icons/code.svg",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/src/projects`
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sass',
    'gatsby-plugin-netlify'
  ],
};
