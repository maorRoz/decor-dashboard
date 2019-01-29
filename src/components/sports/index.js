import React, { Component } from 'react';
import './sports.css';
import _ from 'lodash';
import { Image } from 'semantic-ui-react';
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
          <Image src={realMadridIcon} alt='realmadridicon' size='tiny' />
        </div>
        <div className='scores'>
          <span>{team1Score} : {team2Score}</span>
        </div>
        <div className='teamIcon'>
          <Image src={fcb} alt='fcb' size='tiny'/>
        </div>
      </div>
    );
  }
}

export default Sports;
