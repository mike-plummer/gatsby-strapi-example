const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for pages
  const wlPage = path.resolve('./src/templates/WLPage.tsx')

  const result = await graphql(
    `
      {
        allStrapiPages {
          nodes {
            id
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading pages from Strapi`,
      result.errors
    )
    return
  }

  const pages = result.data.allStrapiPages.nodes

  // Create pages
  // But only if there's at least one page found in Strapi
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (pages.length > 0) {
    pages
      // .filter((page) => page.slug !== '/')
      .forEach((page) => {
        console.info(`Creating page '${page.id}' @ '${page.slug}'`);
        createPage({
          path: `/${page.slug || ''}`,
          component: wlPage,
          context: {
            id: page.id
          },
        })
      })
  }
}
