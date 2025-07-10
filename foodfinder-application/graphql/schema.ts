import gql from "graphql-tag"
import locationTypeDefsCustoms from "graphql/locations/custom.gql"
import locationTypeDefsQueries from "graphql/locations/queries.gql"
import locationTypeDefsMutations from "graphql/locations/mutations.gql"

export const typeDefs = gql`

${locationTypeDefsCustoms}
type Query {
${locationTypeDefsQueries}
}
type Mutation {
${locationTypeDefsMutations}
}

`;