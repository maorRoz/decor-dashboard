const subscribers = [];

const addSubscriber = (subscriber) => {
  subscribers.push(subscriber);
};

module.exports = {
  addSubscriber
};
