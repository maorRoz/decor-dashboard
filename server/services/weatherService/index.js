const { weather } = require('./weather.json');

let latestWeatherResultIndex = 0;

const fetchCurrentWeather = () => {
  const { results, location } = weather;
  return { weeklyWeather: results[latestWeatherResultIndex], location };
};

const flipLatestWeatherResults = () => {
  latestWeatherResultIndex = latestWeatherResultIndex === 0 ? 1 : 0;
};

module.exports = {
  fetchCurrentWeather,
  flipLatestWeatherResults
};
