import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import * as styles from './navigation.module.scss'

interface NavigationProps {
}

const Navigation: React.FC<NavigationProps> = () => {
  const data: GatsbyTypes.NavigationQuery = useStaticQuery<GatsbyTypes.NavigationQuery>(
    graphql`
        query Navigation {
            strapi {
                pages {
                    id
                    shortName
                    slug
                }
            }
        }
    `
  );

  return (
    <nav role="navigation" className={styles.container} aria-label="Main">
      <Link to="/" className={styles.logoLink}>
        <span className={styles.logo}/>
        <span className={styles.navigationItem}>WL Example App</span>
      </Link>
      <ul className={styles.navigation}>
        {data.strapi?.pages?.map((page) => (
          <li key={page!.id} className={styles.navigationItem}>
            <Link to={`/${page!.slug || ''}`} activeClassName="active">
              {page!.shortName}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation
