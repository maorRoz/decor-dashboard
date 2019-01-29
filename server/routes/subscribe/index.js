const express = require('express');

const router = express.Router();
const pathPrefix = '/subscribe';

const { addSubscriber } = require('../../services/subscribeService');

router.post('/', (req, res) => {
  const { email } = req.body;
  addSubscriber(email);
  res.sendStatus(200);
});

module.exports = { router, pathPrefix };
