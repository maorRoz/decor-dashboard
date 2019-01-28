import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import News from './news';

const Tile = ({ headline, context }) => (
  <div>
    <h3>{headline}</h3>
    {context}
  </div>
);

class Dashboard extends Component {
  render() {
    const { news } = this.props;
    return (
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={6}>
            <Tile headline={'News Update'} context={<News news={news}/>}/>
          </Grid.Column>
          <Grid.Column>
            <Tile headline={'Weather'}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5}>
            <Tile headline={'Finance'}/>
          </Grid.Column>
          <Grid.Column width={5}>
            <Tile headline={'Sports'}/>
          </Grid.Column>
          <Grid.Column width={4}>
            <Tile headline={'Subscribe'}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Dashboard;
