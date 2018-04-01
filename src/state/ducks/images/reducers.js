import { combineReducers } from "redux";
import fetchImage from "./actions";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const getImages = (state = initialState, action) => {
  switch (action.type) {
    case fetchImage.TRIGGER:
      return {
        ...state,
        loading: true,
      };
    case fetchImage.SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case fetchImage.FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case fetchImage.FULFILL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  getImages
});

export default reducer;