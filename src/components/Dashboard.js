import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import News from './news';
import Weather from './weather';
import Finance from './finance';
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
    const { news, weather, finance, scores, onSubmit } = this.props;
    return (
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={7}>
            <Tile headline={'News Update'} context={<News news={news}/>}/>
          </Grid.Column>
          <Grid.Column>
            <Tile headline={'Weather'} context={<Weather weather={weather}/>}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={7}>
            <Tile headline={'Finance'} context={<Finance financeData={finance}/>}/>
          </Grid.Column>
          <Grid.Column width={4}>
            <Tile headline={'Sports'} context={<Sports scores={scores}/>}/>
          </Grid.Column>
          <Grid.Column width={4}>
            <Tile headline={'Subscribe For Updates'} context={<Subscribe onSubmit={onSubmit} />}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Dashboard;
