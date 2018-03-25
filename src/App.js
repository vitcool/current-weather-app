import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { bindActionCreators } from 'redux';
import * as fetchActions from "./actions/fetch";
import {connect} from 'react-redux';
import CitySelector from './components/CitySelector';
import CurrentWeather from './components/CurrentWeather';

class App extends Component {
  constructor(props){
    super(props);
    this.getApiData = this.getApiData.bind(this);
  }
  getApiData(index){
    this.props.actions.getApiData(index);
  }
  render() {
    const { data, fetching } = this.props;

    return (
      <div className="App">

        <CitySelector elementClick={this.getApiData}/>
        <CurrentWeather cityData={data}/>
      
      </div>
    );
  }
}

function mapStateToProps(state, props){
  return{
    data: state.fetch.data,
    fetching: state.fetch.fetching,
    error: state.fetch.error
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(fetchActions, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
