const { x, y, columns, data } = require('./finance.json');

let latestFinanceData = 0;

const fetchFinanceData = () => ({ x, y, columns, marketData: data[latestFinanceData] });

const flipLatestFinanceData = () => {
  latestFinanceData = latestFinanceData === 0 ? 1 : 0;
};

module.exports = {
  fetchFinanceData,
  flipLatestFinanceData
};
