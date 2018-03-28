import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { bindActionCreators } from "redux";
//import * as fetchActions from "./actions/fetch";
//import * as imagesActions from "./actions/images";
import { connect } from "react-redux";
import CitySelector from "./components/CitySelector";
import CurrentWeather from "./components/CurrentWeather";

import { currentWeatherDataOperations } from "./state/ducks/currentWeatherData";

class App extends Component {
  constructor(props) {
    super(props);
    this.getApiData = this.getApiData.bind(this);
  }
  getApiData(index) {
    // dispatch(currentWeatherDataOperations.getApiData(index));
    this.props.fetch.getApiData(index);
    //this.props.images.getCountryImage("ukraine");
  }
  render() {
    const { data, fetching, imagesData, imagesFetching } = this.props;

    return (
      <div className="App">
        <CitySelector
          elementClick={this.getApiData}
          isLeftSide={data ? true : false}
        />
        {data ? <CurrentWeather cityData={data} /> : null}
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    data: state.currentWeatherData.fetch.data,
    fetching: state.currentWeatherData.fetch.fetching,
    error: state.currentWeatherData.fetch.error,
    // imagesData: state.images.data,
    // imagesFetching: state.images.fetching,
    // imagesError: state.images.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetch: bindActionCreators(currentWeatherDataOperations, dispatch),
    // images: bindActionCreators(imagesActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
