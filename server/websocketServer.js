module.exports = (server) => {
  // eslint-disable-next-line global-require
  const io = require('socket.io')(server);

  io.on('connection', (socket) => {
    socket.emit('notification', 'hello');
    socket.on('greeting', message => `greeting! I've received "${message}"`);
  });
};
