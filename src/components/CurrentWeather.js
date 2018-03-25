import React, {Component} from 'react';

export default class CurrentWeather extends Component{
    render(){
        return(
            <div className="current-weather-component">{this.props.cityData ? this.props.cityData.name : 'Information will displayed here'}</div>
        )
    }
}