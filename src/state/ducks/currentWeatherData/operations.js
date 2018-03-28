import actions from "./actions";

const getApiData = cityId => {
  return actions.getApiData(cityId);
};

export default {
  getApiData
};