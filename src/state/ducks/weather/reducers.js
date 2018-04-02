import { combineReducers } from "redux";
import getWeatherData from './actions';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const getWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case getWeatherData.TRIGGER:
      return {
        ...state,
        loading: true,
      };
    case getWeatherData.SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };
    case getWeatherData.FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case getWeatherData.FULFILL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  getWeather: getWeatherReducer
});

export default reducer;
