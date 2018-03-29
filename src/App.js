import React, { Component } from "react";
import "./App.css";
import { bindActionCreators } from "redux";

import { connect } from "react-redux";
import CitySelector from "./components/CitySelector";
import CurrentWeather from "./components/CurrentWeather";

import { weatherOperations } from "./state/ducks/weather";
import { imagesOperations } from "./state/ducks/images";

class App extends Component {
  constructor(props) {
    super(props);
    this.getApiData = this.getApiData.bind(this);
  }
  getApiData(index, countryCode) {
    this.props.fetch.getApiData(index);
    this.props.images.getImage(countryCode);
  }
  render() {
    const { data, imagesData } = this.props;
    return (
      <div className="App">
        <CitySelector
          elementClick={this.getApiData}
          isLeftSide={data ? true : false}
        />
        {data ? <CurrentWeather cityData={data} imageSrc={imagesData}/> : null}
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const stateWeatherFetch = state.weather.fetch;
  const stateImages = state.images.getImages;
  return {
    data: stateWeatherFetch.data,
    fetching: stateWeatherFetch.fetching,
    error: stateWeatherFetch.error,
    imagesData: stateImages.data,
    imagesFetching: stateImages.fetching,
    imagesError: stateImages.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetch: bindActionCreators(weatherOperations, dispatch),
    images: bindActionCreators(imagesOperations, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
