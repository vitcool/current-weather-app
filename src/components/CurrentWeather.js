import React, {Component} from 'react';

export default class CurrentWeather extends Component{
    showWeatherData(cityData){
        console.log(cityData)
        return (
            <div className="weather-info">
                <div className="city-name">{cityData.name}</div>
                <div className="temperature">temp {cityData.main.temp} &deg; C</div>
                <div className="pressure">pressure {cityData.main.pressure} hPa</div>
                <div className="humidity">humidity {cityData.main.humidity} %</div>
                <div className="wind-speed">wind speed {cityData.wind.speed} m/s</div>
                <div className="clouds">clouds {cityData.clouds.all} %</div>
                <div className="coordinates"> coordinates: 
                    long: {cityData.coord.lon} / lat : {cityData.coord.lat}
                </div>
            </div>
        )
    }
    render(){
        return(
            <div className="current-weather-component">{this.props.cityData ? this.showWeatherData(this.props.cityData) : 'Information will displayed here'}</div>
        )
    }
}