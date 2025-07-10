import { locationQueries } from "./locations/queries"; 
import { locationMutation } from "./locations/mutations";


export const resolvers ={
    Query:{
        ...locationQueries
    },
    Mutation:{
        ...locationMutation
    }
}