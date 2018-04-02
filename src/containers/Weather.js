import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import CitySelector from "./../components/CitySelector";
import CurrentWeather from "./../components/CurrentWeather";

import { weatherOperations } from "./../state/ducks/weather";
import { imagesOperations } from "./../state/ducks/images";
import { locationOperations } from "./../state/ducks/location";

import { getImage, getError as getErrorImage, getLoading as getLoadingImage } from "./../state/ducks/images/selectors";

import { getLocation, getError as getErrorLocation, getLoading as getLoadingLocation } from "./../state/ducks/location/selectors";


import { Link } from 'react-router-dom';

import '../styles/Weather.css';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.getApiData = this.getApiData.bind(this);
  }
  componentDidMount(){
    this.props.location.getCurrentLocation();
  }
  getApiData(index, city) {
    this.props.fetch.getApiData(index);
    this.props.images.fetchImage(city);
  }
  render() {
    const { data, imagesData } = this.props;
    return (
      <div className="Weather">
        <CitySelector
          elementClick={this.getApiData}
          isLeftSide={data ? true : false}
        />
        {data ? <CurrentWeather cityData={data} imageSrc={imagesData} /> : null}
        <div className="link-to-about-page">
          <Link to='/about'>About</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const stateWeatherFetch = state.weather.fetch;
  return {
    data: stateWeatherFetch.data,
    fetching: stateWeatherFetch.fetching,
    error: stateWeatherFetch.error,
    imagesData: getImage(state),
    imagesFetching: getLoadingImage(state),
    imagesError: getErrorImage(state),
    locationData: getLocation(state),
    locationFetching: getLoadingLocation(state),
    locationError: getErrorLocation(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetch: bindActionCreators(weatherOperations, dispatch),
    images: bindActionCreators(imagesOperations, dispatch),
    location: bindActionCreators(locationOperations, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
