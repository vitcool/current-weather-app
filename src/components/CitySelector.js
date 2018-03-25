import React, {Component} from 'react';
import cities from './../mocks/cityList.json';

export default class CitySelector extends Component{
    elementClick(cityId){
        this.props.elementClick(cityId)
    }
    render(){
        const countries = this.getCountries();
        return(
            <div className="city-selector-component">
                <h2>Please, select the city</h2>
                {cities.map((element, index) => {
                    return (<p key={element.id} onClick={this.elementClick.bind(this, element.id)}>{index}.{element.name} - {element.country}</p>)
                })}
            </div>
        )
    }
    getCountries(){
        var unique = {};
        var distinct = [];
        for( var i in cities ){
         if( typeof(unique[cities[i].country]) == "undefined"){
          distinct.push(cities[i].country);
         }
         unique[cities[i].country] = 0;
        }
        return distinct;
    }
}