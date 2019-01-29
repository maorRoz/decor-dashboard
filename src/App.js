/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import './App.css';

import subscribe from './socket';

import { getNews, getWeather, getFinance, getScores, submitEmailForUpdates } from './API';

import Dashboard from './components/Dashboard';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { news: {}, scores: {} };
  }

  async componentDidMount(){
    const news = await getNews();
    const weather = await getWeather();
    const finance = await getFinance();
    const scores = await getScores();
    this.setState({ news, weather, finance, scores });
    subscribe(this);
  }

  render() {
    const { news, weather, finance, scores } = this.state;
    return (
      <div className='App'>
        <Dashboard news={news} weather={weather} finance={finance} scores={scores} onSubmit={submitEmailForUpdates}/>
      </div>
    );
  }
}

export default App;
