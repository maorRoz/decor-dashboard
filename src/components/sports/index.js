import React, { Component } from 'react';
import './sports.css';
import _ from 'lodash';
import realMadridIcon from './realmadrid.png';
import fcb from './fcb.png';

class Sports extends Component {
  render(){
    const { scores } = this.props;
    const team1Score = _.get(scores, 'team1', '');
    const team2Score = _.get(scores, 'team2', '');
    return(
      <div className='sports'>
        <div className='teamIcon'>
          <img src={realMadridIcon} alt='realmadridicon'/>
        </div>
        <div className='scores'>
          <span>{team1Score} : {team2Score}</span>
        </div>
        <div className='teamIcon'>
          <img src={fcb} alt='fcb'/>
        </div>
      </div>
    );
  }
}

export default Sports;
