import { FB_USER_EXISTS } from "../constants/action-types";

export default (state = null, action) => {

    switch (action.type) {
        case FB_USER_EXISTS:
            return action.payload;
        
        default:
            return state;
    }

}