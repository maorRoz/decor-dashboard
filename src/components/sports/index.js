import React, { Component } from 'react';
import _ from 'lodash';

class Sports extends Component {
  render(){
    const { scores } = this.props;
    const team1Score = _.get(scores, 'team1', '');
    const team2Score = _.get(scores, 'team2', '');
    return(<div>{team1Score}:{team2Score}</div>);
  }
}

export default Sports;
