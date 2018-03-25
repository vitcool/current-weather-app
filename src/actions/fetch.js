// action types
const API_CALL_REQUEST = "API_CALL_REQUEST";

export const getApiData = (cityId) => {
    return {
        type: API_CALL_REQUEST,
        cityId
    }
}
