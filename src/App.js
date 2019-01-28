/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

import subscribe from './socket';

import { getNews } from './API';

import Dashboard from './components/Dashboard';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { news: {}, weather: {}, finance: {}, sports: {} };
  }

  async componentDidMount(){
    const news = await getNews();
    this.setState({ news });
    subscribe(this);
  }

  render() {
    const { news } = this.state;
    return (
      <div className='App'>
        <Dashboard news={news}/>
      </div>
    );
  }
}

export default App;
