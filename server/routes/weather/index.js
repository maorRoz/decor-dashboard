const express = require('express');

const router = express.Router();
const pathPrefix = '/weather';

const { fetchCurrentWeather } = require('../../services/weatherService');

router.get('/', (req, res) => {
  const currentWeather = fetchCurrentWeather();
  res.send(currentWeather);
});
module.exports = { router, pathPrefix };
