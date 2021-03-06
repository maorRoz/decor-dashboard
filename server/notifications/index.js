const Notification = require('./Notification');
const { SECOND, MINUTE, HOUR } = require('./constants');

const { fetchNewestNews, flipNewestNews } = require('../services/newsService');
const { fetchCurrentWeather, flipLatestWeatherResults } = require('../services/weatherService');
const { fetchFinanceData, flipLatestFinanceData } = require('../services/financeService');
const { fetchLatestScores, progressGame } = require('../services/sportsService');

const notify = (subscriber, notification) => {
  const { fetchMethod, updateMethod, event } = notification;
  updateMethod();
  subscriber.emit(event, fetchMethod());
};

const newsNotification = new Notification(fetchNewestNews, flipNewestNews, 'newsUpdate');
const weatherNotification = new Notification(fetchCurrentWeather, flipLatestWeatherResults, 'weatherUpdate');
const financeNotification = new Notification(fetchFinanceData, flipLatestFinanceData, 'financeUpdate');
const sportsNotification = new Notification(fetchLatestScores, progressGame, 'sportsUpdate');

const createSubscription = (subscriber) => {
  setInterval(notify, MINUTE * 10, subscriber, newsNotification);
  setInterval(notify, HOUR * 4, subscriber, weatherNotification);
  setInterval(notify, MINUTE * 5, subscriber, financeNotification);
  setInterval(notify, SECOND, subscriber, sportsNotification);
};

module.exports = {
  createSubscription
};
