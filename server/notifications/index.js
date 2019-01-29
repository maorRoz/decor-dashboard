const Notification = require('./Notification');
const { SECOND } = require('./constants');

const { fetchNewestNews, flipNewestNews } = require('../services/newsService');
const { fetchLatestScores, progressGame } = require('../services/sportsService');

const notify = (subscriber, notification) => {
  const { fetchMethod, updateMethod, event } = notification;
  updateMethod();
  subscriber.emit(event, fetchMethod());
};

const newsNotification = new Notification(fetchNewestNews, flipNewestNews, 'newsUpdate');
//const weatherNotification = new Notification();
const sportsNotification = new Notification(fetchLatestScores, progressGame, 'sportsUpdate');

const createSubscription = (subscriber) => {
  setInterval(notify, SECOND * 3, subscriber, newsNotification);
  setInterval(notify, SECOND * 5, subscriber, sportsNotification);
  //setInterval(notify, SECOND * 3, subscriber, newsNotification);
  //setInterval(notify, SECOND * 3, subscriber, newsNotification);
  //setInterval(notify, SECOND * 3, subscriber, newsNotification);
};

module.exports = {
  createSubscription
};
