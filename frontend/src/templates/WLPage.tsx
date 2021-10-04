import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

import Container from '../components/container';
import ContentSection from '../components/ContentSection';

interface WLPageProps {
  data: GatsbyTypes.WLPageByIdQuery;
}

const WLPage: React.FC<WLPageProps> = ({ data }) => {
  const page = data.strapi.page;

  if (!page) {
    return <>404</>;
  }

  const sections = page.contentSections;

  return (
    <Layout
      seo={{
        title: page?.metadata?.metaTitle!,
        description: page?.metadata?.metaDescription!,
        image: page?.metadata?.shareImage?.url!
      }}
    >
      <Container>
        I'm the {page.shortName} page!
        {sections?.map((section, index) => (
          <ContentSection key={section!.id!} type={section!.__typename} data={section!} />
        ))}
      </Container>
    </Layout>
  );
}

export default WLPage;

export const pageQuery = graphql`
    query WLPageById(
        $id: ID!
    ) {
        strapi {
            page(id: $id) {
                shortName
                metadata {
                    metaTitle
                    metaDescription
                    shareImage {
                        url
                    }
                }
                contentSections {
                    __typename
                    ... on Strapi_ComponentSectionsHero {
                        id
                        title
                    }
                    ... on Strapi_ComponentSectionsBottomActions {
                        id
                        title
                    }
                    ... on Strapi_ComponentSectionsFeatureColumnsGroup {
                        id
                    }
                    ... on Strapi_ComponentSectionsFeatureRowsGroup {
                        id
                    }
                    ... on Strapi_ComponentSectionsLargeVideo {
                        id
                        title
                    }
                    ... on Strapi_ComponentSectionsLeadForm {
                        id
                        title
                    }
                    ... on Strapi_ComponentSectionsPricing {
                        id
                        title
                    }
                    ... on Strapi_ComponentSectionsRichText {
                        id
                        content
                    }
                    ... on Strapi_ComponentSectionsTestimonialsGroup {
                        id
                        title
                    }
                }
            }
        }
    }
`
