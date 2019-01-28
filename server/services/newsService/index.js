const { news } = require('./news.json');

let newestNewsIndex = 0;

const fetchNewestNews = () => news[newestNewsIndex];

const flipNewestNews = () => {
  newestNewsIndex = newestNewsIndex === 0 ? 1 : 0;
};

module.exports = {
  fetchNewestNews,
  flipNewestNews
};
