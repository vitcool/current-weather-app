import * as types from "./types";

const getCountryImage = (countryCode) => {
    return {
        type: types.API_CALL_REQUEST,
        countryCode
    }
}

export default { getCountryImage }