import React, { Component } from "react";

import filterCities from "../helpers/getCityIdByName";
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

  elementClick(cityId, city) {
    this.setState({ selectedCityId: cityId });
    this.props.elementClick(cityId, city);
  }
  onFilterChange(event) {
    this.setState({ searchValue: event.target.value.length > 3 ? event.target.value : "" });
  }
  showList() {
    const filteredCities = filterCities(this.state.searchValue);
    if (filteredCities.length > 0){
      return (      
        <div className="collection">
          {filteredCities.map((element, index) => {
              return (
                <a
                  className={
                    "collection-item " +
                    (this.state.selectedCityId === element.id ? "active" : "")
                  }
                  key={element.id}
                  onClick={this.elementClick.bind(
                    this,
                    element.id,
                    element.name
                  )}
                >
                  {element.name} - {element.country}
                </a>
              );
            })}
        </div>
      );
    }
  }
  render() {
    return (
      <div
        className={
          "city-selector-component " +
          (this.props.isLeftSide ? "city-selector-component-left-side" : "")
        }
      >
        <div
          className={
            this.props.isLeftSide ? "half-city-selector-component" : ""
          }
        >
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
}
