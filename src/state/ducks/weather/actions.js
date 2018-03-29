import * as types from "./types";

const getApiData = (cityId) => {
    return {
        type: types.API_CALL_REQUEST,
        cityId
    }
}

export default { getApiData };

