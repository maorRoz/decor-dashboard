const express = require('express');

const router = express.Router();
const pathPrefix = '/weather';

const { fetchCurrentWeather, fetchWeeklyWeather } = require('../../services/weatherService');

router.get('/', (req, res) => {
  const news = fetchNewestNews();
  res.send(news);
});

module.exports = { router, pathPrefix };
