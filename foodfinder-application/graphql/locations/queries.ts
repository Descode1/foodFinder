import { findLocationAll,findLocationsById,onUserWishlist } from "@/mongoose/locations/service";

export const locationQueries = {
    allLocations: async(_: any) =>{
        return await findLocationAll();
    },
    locationsById: async(_: any, param: {location_ids: string[]}) =>{
        return await findLocationsById(param.location_ids);
    },
    onUserWishlist: async(_: any, param: {user_id: string}) =>{
        return await onUserWishlist(param.user_id);
    },
};