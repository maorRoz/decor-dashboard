import React, { Component } from 'react';
//import _ from 'lodash';
import { Chart } from 'react-google-charts';

class Finance extends Component {
  getChart = (financeData) => {
    const { x, y, columns, marketData } = financeData;
    const chartArrayData = JSON.parse(JSON.stringify(marketData));
    chartArrayData.unshift(columns);
    return { x, y, data: chartArrayData };
  }

  render(){
    const { financeData } = this.props;
    const { x, y, data } = financeData ? this.getChart(financeData) : {};
    return (
      <Chart
  width={'95%'}
  height={'100%'}
  chartType='LineChart'
  loader={<div>Loading Chart...</div>}
  data={data}
  options={{
    hAxis: {
      title: x
    },
    vAxis: {
      title: y
    }
  }}
  rootProps={{ chartId: '1' }}
/>);
  }
}

export default Finance;
