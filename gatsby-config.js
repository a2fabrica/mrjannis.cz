module.exports = {
  siteMetadata: {
    title: "MR. JANNIS",
    titleTemplate: "%s | MR. JANNIS",
    description: "Autentický řecký streetfood",
    siteUrl: "https://mrjannis.cz",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "MR. JANNIS",
        start_url: "/",
        background_color: "black",
        theme_color: "white",
        icon: "src/images/favicon.png",
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
  ],
}
