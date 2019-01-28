const express = require('express');

const router = express.Router();
const pathPrefix = '/news';

const { fetchNewestNews } = require('../../services/newsService');

router.get('/', (req, res) => {
  const news = fetchNewestNews();
  res.send(news);
});

module.exports = { router, pathPrefix };
