import React, { Component } from "react";
import cities from "./../mocks/cityList-min.json";
import "./../styles/CitySelector.css";

export default class CitySelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      selectedCityId: 0
    };
  }
  // uncomment next block for skip city selector when debugging

  // componentDidMount(){
  //   this.props.elementClick(2643743, "GB");
  // }
  
  elementClick(cityId, countryCode) {
    this.setState({ selectedCityId: cityId });
    this.props.elementClick(cityId, countryCode);
  }
  onFilterChange(event) {
    event.target.value.length > 3 ? this.setState({ searchValue: event.target.value }) : null;
  }
  filterData(element) {
    return element.name
      .toLowerCase()
      .includes(this.state.searchValue.toLowerCase());
  }
  showList() {
    return (
      <div className="collection">
        {cities
          .filter(element => this.filterData(element))
          .map((element, index) => {
            return (
              <a
                href="#"
                className={"collection-item " + (this.state.selectedCityId == element.id ? "active" : "")}
                key={element.id}
                onClick={this.elementClick.bind(this, element.id, element.country)}
              >
                {element.name} - {element.country}
              </a>
            );
          })}
      </div>
    );
  }
  render() {
    const countries = this.getCountries();
    return (
      <div
        className={
          "city-selector-component " +
          (this.props.isLeftSide ? "city-selector-component-left-side" : "")
        }
      >
        <div className={this.props.isLeftSide ? "half-city-selector-component" : ""}>
          <div className="input-field">
            <label htmlFor="city" className="validate" type="text">
              City
            </label>
            <input
              className="input-city-selector"
              type="text"
              onChange={this.onFilterChange.bind(this)}
              id="city"
            />
          </div>
          <div className="city-list">
            {this.state.searchValue ? this.showList() : null}
          </div>
        </div>
      </div>
    );
  }
  getCountries() {
    var unique = {};
    var distinct = [];
    for (var i in cities) {
      if (typeof unique[cities[i].country] == "undefined") {
        distinct.push(cities[i].country);
      }
      unique[cities[i].country] = 0;
    }
    return distinct;
  }
}
