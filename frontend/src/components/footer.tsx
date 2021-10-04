import React from 'react'

import Container from './container'

const Footer: React.FC = () => (
  <Container as="footer">
    <div>
      Built with <a href="https://strapi.io">Strapi</a> and{' '}
      <a href="https://gatsbyjs.com">Gatsby</a> &middot;{' '}
    </div>
  </Container>
)

export default Footer
