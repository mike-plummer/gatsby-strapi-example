import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

import Container from '../components/container';

interface WLPageProps {
  data: GatsbyTypes.WLPageByIdQuery;
}

const WLPage: React.FC<WLPageProps> = ({ data }) => {
  const page = data.strapiPages;

  if (!page) {
    return <>404</>;
  }

  return (
    <Layout
      seo={{
        title: page.shortName!,
        description: page.shortName!
      }}
    >
      <Container>
        I'm the {page.shortName} page!
      </Container>
    </Layout>
  );
}

export default WLPage;

export const pageQuery = graphql`
    query WLPageById(
        $id: String!
    ) {
        strapiPages(id: { eq: $id }) {
            shortName
        }
    }
`
