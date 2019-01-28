import React, { Component } from 'react';
import Moment from 'moment';
import sun from './sun.png';

class Weather extends Component {
  render(){
    const currentTime = new Moment().format('HH:mm');
    return(<div>
      <p>30C</p>
      <p>Beer Sheva</p>
      <img src={sun} />
      <div>last updated: {currentTime}</div>
    </div>);
  }
}

export default Weather;
