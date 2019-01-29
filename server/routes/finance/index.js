const express = require('express');

const router = express.Router();
const pathPrefix = '/finance';

const { fetchFinanceData } = require('../../services/financeService');

router.get('/', (req, res) => {
  const financeData = fetchFinanceData();
  res.send(financeData);
});

module.exports = { router, pathPrefix };
