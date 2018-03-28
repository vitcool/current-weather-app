import { combineReducers } from "redux";
import * as types from "./types";

const getImages = (state = {}, action) => {
  switch (action.type) {
    case types.API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case types.API_CALL_SUCCESS:
      console.log("SUCCESS!", action.imageUrl);
      return { ...state, fetching: false, data: action.response.data };
    case types.API_CALL_FAILURE:
      return { ...state, fetching: false, data: null, error: action.error };
    default:
      return state;
  }
};

const reducer = combineReducers({
  images: getImages
});

export default reducer;