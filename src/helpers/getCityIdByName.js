import cities from "./../mocks/cityList-min.json";

const filterData = (element, searchVal) => {
  return element.name.toLowerCase().includes(searchVal.toLowerCase());
};

const filterCities = searchVal =>
  cities.filter(element => filterData(element, searchVal));
export default filterCities;
