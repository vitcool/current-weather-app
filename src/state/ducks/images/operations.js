import fetchImages from "./actions";

const fetchImage = countryCode => {
  return fetchImages(countryCode);
};

export default {
  fetchImage
};