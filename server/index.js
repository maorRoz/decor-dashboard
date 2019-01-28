/* eslint-disable import/order */
/* eslint-disable no-console */
const app = require('./app');
const server = require('http').Server(app);
require('./websocketServer')(server);

const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`[server] Listening on port ${port}`));
