import actions from "./actions";

const getImage = countryCode => {
  return actions.getCountryImage(countryCode);
};

export default {
  getImage
};