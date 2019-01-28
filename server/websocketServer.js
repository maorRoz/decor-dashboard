const { createSubscription } = require('./notifications');

module.exports = (server) => {
  // eslint-disable-next-line global-require
  const io = require('socket.io')(server);

  createSubscription(io.of('/'));
};
