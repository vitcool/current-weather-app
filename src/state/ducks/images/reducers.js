import { combineReducers } from "redux";
import * as types from "./types";

const getImages = (state = {}, action) => {
  switch (action.type) {
    case types.API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case types.API_CALL_SUCCESS:
      return { ...state, fetching: false, data: action.imageUrl };
    case types.API_CALL_FAILURE:
      return { ...state, fetching: false, data: null, error: action.error };
    default:
      return state;
  }
};

const reducer = combineReducers({
  getImages: getImages
});

export default reducer;