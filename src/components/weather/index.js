import React, { Component } from 'react';
import './weather.css';
import { Container, Modal, Grid, Image } from 'semantic-ui-react';
import Moment from 'moment';
import sun from './sun.png';
import cloudy from './cloudy.png';

const DayForecast = ({ day, temperature }) => (
  <Grid.Column>
    <div className='dailyWeather'>
      <div className='day'>{day}</div>
      <Image src={temperature > 20 ? sun : cloudy} />
      <div className='dailyWeatherText'>
        <span>{temperature}<sup>°C</sup></span>
      </div>
    </div>
  </Grid.Column>
);

const ForeCast = ({ weeklyWeather }) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wedensday', 'Thursday', 'Friday', 'Saturday'];
  const daysForecast = weeklyWeather
    .map((temperature, index) => <DayForecast day={days[index]} temperature={temperature}/>);
  return(
    <Grid columns={7} divided>
      <Grid.Row>
        {daysForecast}
      </Grid.Row>
    </Grid>
  );
};

const CurrentWeather = ({ location, temperature, currentTime }) => (
  <div>
    <div className='currentWeather'>
      <div className='weatherText'>
        <p>{temperature}<sup>°C</sup></p>
        <p>{location}</p>
        <div />
      </div>
      <div>
        <img src={temperature > 20 ? sun : cloudy} alt='sun' />
      </div>
    </div>
    <div>last updated: {currentTime}</div>
  </div>
);

class Weather extends Component {
  currentWeather = (weeklyWeather) => {
    const currentTemperature = weeklyWeather[0];
    return { temperature: currentTemperature };
  };

  render(){
    const { weather = {} } = this.props;
    const { location, weeklyWeather } = weather;
    const { temperature } = weeklyWeather ? this.currentWeather(weeklyWeather) : {};
    const currentTime = new Moment().format('HH:mm');
    return(
      <Modal
        trigger={<Container>
          <CurrentWeather location={location} temperature={temperature} currentTime={currentTime}/>
        </Container>}>
        <Modal.Header>Weekly Weather Forecast</Modal.Header>
        <Modal.Content>
          {weeklyWeather && <ForeCast weeklyWeather={weeklyWeather}/>}
        </Modal.Content>
      </Modal>
    );
  }
}

export default Weather;
