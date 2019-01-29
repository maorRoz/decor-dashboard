const express = require('express');

const router = express.Router();

const newsRoute = require('./news');
const weatherRoute = require('./weather');
const financeRoute = require('./finance');
const sportsRoute = require('./sports');
const subscribeRoute = require('./subscribe');

const appRoutes = [newsRoute, weatherRoute, financeRoute, sportsRoute, subscribeRoute];

appRoutes.forEach(route => router.use(route.pathPrefix, route.router));

module.exports = router;
