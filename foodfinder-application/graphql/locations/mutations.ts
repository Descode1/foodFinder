import { updateWishlist } from "@/mongoose/locations/service";

interface UpdateWishlistInterface{
    user_id: string;
    location_id: string;
}

export const locationMutation = {
    removeWishlist: async(_: any, param: UpdateWishlistInterface, context: {}) =>{
        return await updateWishlist(param.user_id,param.location_id,"remove");
    },
    addWishlist: async(_: any, param: UpdateWishlistInterface, context: {}) =>{
        return await updateWishlist(param.user_id, param.location_id,"add");
    },
};