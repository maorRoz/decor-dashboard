import React, { Component } from 'react';
import Moment from 'moment';
import sun from './sun.png';

class Weather extends Component {
  currentWeather = (weather) => {
    const { location, weeklyWeather } = weather;
    const currentTemperature = weeklyWeather[0];
    return { temperature: currentTemperature, location };
  };

  render(){
    const { weather } = this.props;
    const { location, temperature } = weather ? this.currentWeather(weather) : {};
    const currentTime = new Moment().format('HH:mm');
    return(<div>
      <p>{temperature}C</p>
      <p>{location}</p>
      <img src={sun} alt='sun' />
      <div>last updated: {currentTime}</div>
    </div>);
  }
}

export default Weather;
