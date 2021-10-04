import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface SeoProps {
  description?: string;
  lang?: string;
  meta?: any[];
  title: string;
  image?: string;
}

const Seo: React.FC<SeoProps> = ({ description = '', lang = 'en', meta = [], title, image }) => {
  const { strapi } = useStaticQuery<GatsbyTypes.GlobalSeoQuery>(
    graphql`
      query GlobalSeo {
          strapi {
              global {
                  metadata {
                      metaTitle
                      metaDescription
                      shareImage {
                          url
                      }
                  }
              }
          }
      }
    `
  )

  const metaDescription = description || strapi?.global?.metadata?.metaDescription;
  const defaultTitle = strapi?.global?.metadata?.metaTitle;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      defaultTitle={defaultTitle}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: image,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default Seo
