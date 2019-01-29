const express = require('express');

const router = express.Router();
const pathPrefix = '/sports';

const { fetchLatestScores } = require('../../services/sportsService');

router.get('/', (req, res) => {
  const scores = fetchLatestScores();
  res.send(scores);
});

module.exports = { router, pathPrefix };
