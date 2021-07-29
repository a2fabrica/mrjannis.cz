import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"
import { Helmet } from "react-helmet"
import Hero from "../images/hero.jpg"

const SEO = ({ title, description }) => {
  const { pathname } = useLocation()
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          titleTemplate
          description
          siteUrl
        }
      }
    }
  `)

  return (
    <Helmet
      htmlAttributes={{
        lang: "cs",
      }}
      title={title ? title : data.site.siteMetadata.title}
      titleTemplate={data.site.siteMetadata.titleTemplate}
      meta={[
        {
          name: "description",
          content: description
            ? description
            : data.site.siteMetadata.description,
        },
        {
          property: "image",
          content: Hero,
        },
        {
          property: "og:url",
          content: `${data.site.siteMetadata.siteUrl}${pathname}`,
        },
        {
          property: "og:title",
          content: title ? title : data.site.siteMetadata.title,
        },
        {
          property: "og:description",
          content: description
            ? description
            : data.site.siteMetadata.description,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:image",
          content: Hero,
        },
      ]}
    />
  )
}

export default SEO
