// action types
const API_PIXABY_REQUEST = "API_PIXABY_REQUEST";

export const getCountryImage = (country) => {
    return {
        type: API_PIXABY_REQUEST,
        country
    }
}
