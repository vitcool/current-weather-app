import getWeatherData from "./actions";

const getWeatherApiData = cityId => {
  return getWeatherData(cityId);
};

export default {
  getWeatherApiData
};