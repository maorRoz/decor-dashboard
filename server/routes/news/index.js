const express = require('express');

const router = express.Router();
const pathPrefix = '/news';

const { news } = require('./newsHandler');

router.get('/', (req, res) => {
  res.send(news);
});

module.exports = { router, pathPrefix };
