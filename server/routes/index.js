const express = require('express');

const router = express.Router();

const newsRoute = require('./news');
const subscribeRoute = require('./subscribe');

const appRoutes = [newsRoute, subscribeRoute];

appRoutes.forEach(route => router.use(route.pathPrefix, route.router));

module.exports = router;
