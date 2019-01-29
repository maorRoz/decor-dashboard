import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import News from './news';
import Weather from './weather';
import Sports from './sports';
import Subscribe from './subscribe';

const Tile = ({ headline, context }) => (
  <div>
    <h3>{headline}</h3>
    {context}
  </div>
);

class Dashboard extends Component {
  render() {
    const { news, scores, onSubmit } = this.props;
    return (
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={5}>
            <Tile headline={'News Update'} context={<News news={news}/>}/>
          </Grid.Column>
          <Grid.Column>
            <Tile headline={'Weather'} context={<Weather/>}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5}>
            <Tile headline={'Finance'}/>
          </Grid.Column>
          <Grid.Column width={5}>
            <Tile headline={'Sports'} context={<Sports scores={scores}/>}/>
          </Grid.Column>
          <Grid.Column width={5}>
            <Tile headline={'Subscribe For Updates'} context={<Subscribe onSubmit={onSubmit} />}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Dashboard;
