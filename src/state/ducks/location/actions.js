import * as types from "./types";

const getCurrentLocation = () => {
    return {
        type: types.API_CALL_REQUEST
    }
}

export default { getCurrentLocation }