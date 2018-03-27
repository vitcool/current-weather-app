// action types
const API_PIXABY_REQUEST = "API_PIXABY_REQUEST";
const API_PIXABY_SUCCESS = "API_PIXABY_SUCCESS";
const API_PIXABY_FAILURE = "API_PIXABY_FAILURE";

// reducer with initial state
const initialState = {
    fetching: false,
    data: null,
    error: null
  };
  
export function images(state = initialState, action) {
  switch (action.type) {
    case API_PIXABY_REQUEST:
      return { ...state, fetching: true, error: null };
    case API_PIXABY_SUCCESS:
      console.log("SUCCESS!", action.response.data);
      return { ...state, fetching: false, data: action.response.data };
    case API_PIXABY_FAILURE:
      return { ...state, fetching: false, data: null, error: action.error };
    default:
      return state;
  }
}