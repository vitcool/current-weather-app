import { combineReducers } from "redux";
import getLocation from "./actions";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const getCurrentLocation = (state = initialState, action) => {
  switch (action.type) {
    case getLocation.TRIGGER:
      return {
        ...state,
        loading: true,
      };
    case getLocation.SUCCESS:
      return {
        ...state,
        data: action.payload.data.city,
      };
    case getLocation.FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case getLocation.FULFILL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  getLocation: getCurrentLocation
});

export default reducer;