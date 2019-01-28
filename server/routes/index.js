const express = require('express');

const router = express.Router();

const newsRoute = require('./news');

const appRoutes = [newsRoute];

appRoutes.forEach(route => router.use(route.pathPrefix, route.router));

module.exports = router;
