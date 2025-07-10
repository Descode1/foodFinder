export default `

allocations: [Location]!
locationsById(location_ids: [String]!): [Locations]!
onUserWishlist(user_id: String!): [Location]!
`;