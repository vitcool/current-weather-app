import * as types from "./types";

const getCountryImage = (city) => {
    return {
        type: types.API_CALL_REQUEST,
        city
    }
}

export default { getCountryImage }