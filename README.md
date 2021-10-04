# gatsby-strapi-example

This is an exploratory example of building a GatsbyJS site backed by a self-hosted Strapi CMS instance.

## Setup

### Backend

1. Navigate to `backend` directory
2. `npm install`
3. Launch Strap instance `npm run develop`
4. Browser should open to `localhost:1337`, setup an account as prompted (local only)
5. Feel free to poke around the default dataset

### Frontend

1. Navigate to `frontend` directory
2. `npm install`
3. Ensure the backend is running, launch Gatsby `npm run develop`
4. Site should open at `localhost:8000`

### Typescript

TS types are autogenerated for Gatsby & GraphQL queries. GraphQL schema is introspected from the running UI server by using `.graphqlconfig` - IDE can generate a GraphQL schema from that file which is used on UI startup to generate datatypes for Strapi assets.

### License

MIT