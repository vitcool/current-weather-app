import React, {Component} from 'react';
import cities from './../mocks/cityList-min.json';
import './../styles/CitySelector.css'

export default class CitySelector extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchValue: ""
        }
    }
    elementClick(cityId){
        this.props.elementClick(cityId)
    }
    onFilterChange(event) {
        this.setState({searchValue: event.target.value});
    }
    filterData(element){
        return element.name.toLowerCase().includes(this.state.searchValue.toLowerCase());
    }
    debounce(a,b,c){var d,e;return function(){function h(){d=null,c||(e=a.apply(f,g))}var f=this,g=arguments;return clearTimeout(d),d=setTimeout(h,b),c&&!d&&(e=a.apply(f,g)),e}}
    showList(){
        return (
            <div className="collection">
                {cities.filter((element) => this.filterData(element)).map((element, index) => {
                    return (<a href="#" className="collection-item" key={element.id} onClick={this.elementClick.bind(this, element.id)}>{element.name} - {element.country}</a>)
                })}
            </div>
        )
    }
    render(){
        const countries = this.getCountries();
        return(
            <div className={"city-selector-component " + (this.props.isLeftSide ? "city-selector-component-left-side" : "")}>
                <div class="input-field">
                    <label for="city" class="validate" type="text">City</label>
                    <input className="input-city-selector" type="text" onChange={this.onFilterChange.bind(this)} id="city"></input>
                </div>
                <div className="city-list">
                    {this.state.searchValue ? this.showList() : null}
                </div>
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