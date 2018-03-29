import React, { Component } from "react";
import "./../styles/CurrentWeather.css";

import pressure from "./../img/pressure.png";
import humidity from "./../img/humidity.png";
import wind from "./../img/wind.png";
import clouds from "./../img/clouds.png";

export default class CurrentWeather extends Component {
  hPaToMmHg(valHPa) {
    //to const 0.75006375541921
    return Math.round(0.75006375541921 * valHPa).toFixed(2);
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
                  "http://openweathermap.org/img/w/" +
                  cityData.weather[0].icon +
                  ".png"
                }
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
        {this.props.imageSrc ? <img src={this.props.imageSrc} alt="city-image" className="country-image"/> : null}
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
