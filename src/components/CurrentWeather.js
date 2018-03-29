import React, { Component } from "react";

import pressure from "./../img/pressure.png";
import humidity from "./../img/humidity.png";
import wind from "./../img/wind.png";
import clouds from "./../img/clouds.png";

import { H_PA_TO_MMHG_COEFICIENT, IMG_PATH_OPENWEATHERMAP } from "./../consts/helper";

import "./../styles/CurrentWeather.css";

export default class CurrentWeather extends Component {
  hPaToMmHg(valHPa) {
    return Math.round(H_PA_TO_MMHG_COEFICIENT * valHPa).toFixed(2);
  }
  showWeatherData(cityData) {
    return (
      <div className="weather-info">
        <div className="actual-weather-data">
          <div className="main-info">
            <div className="city-name">
              {cityData.name}, {cityData.sys.country.toUpperCase()}
            </div>
            <div className="temperature">
              {cityData.main.temp} <span>&deg;C</span>
            </div>
            <div className="weather-icon">
              <img
                src={
                  IMG_PATH_OPENWEATHERMAP +
                  cityData.weather[0].icon +
                  ".png"
                }
                alt={cityData.weather[0].description}
              />
            </div>
          </div>
          <div className="additional-info">
            <div className="pressure">
              <img src={pressure} alt="pressure" />
              <span>{this.hPaToMmHg(cityData.main.pressure)} mmHg </span>
            </div>
            <div className="humidity">
              <img src={humidity} alt="humidity" />
              <span>{cityData.main.humidity} % </span>
            </div>
            <div className="wind">
                <img src={wind} alt="wind" /> 
                <span>{cityData.wind.speed} m/s</span>
            </div>
            <div className="clouds">
                <img src={clouds} alt="clouds" />
                <span>{cityData.clouds.all} %</span>
            </div>
          </div>
        </div>
        {this.props.imageSrc ? <img src={this.props.imageSrc} alt="counrty" className="country-image"/> : null}
      </div>
    );
  }
  render() {
    return (
      <div className="current-weather-component">
        {this.props.cityData
          ? this.showWeatherData(this.props.cityData)
          : "Information will displayed here"}
      </div>
    );
  }
}
