const express = require('express');
const controllers = require('../controller');
const accessTokenAuth = require('../helper/accessTokenAuth');

const router = express.Router();

//Products
router.get('/', (req, res) => {
  const encodedAccessKey = accessTokenAuth(req.header.Authorization);
  controllers
    .getAll(url, req.query, encodedAccessKey)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => new Error(err));
});

router.get('/:product_id', (req, res) => {
  const encodedAccessKey = accessTokenAuth(req.header.Authorization);
  controllers
    .getAll(url, req.query, encodedAccessKey)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => new Error(err));
});

router.get('/:product_id/styles', (req, res) => {
  const encodedAccessKey = accessTokenAuth(req.header.Authorization);
  controllers
    .getAll(url, req.query, encodedAccessKey)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => new Error(err));
});

router.get('/:product_id/related', (req, res) => {
  const encodedAccessKey = accessTokenAuth(req.header.Authorization);
  controllers
    .getAll(url, req.query, encodedAccessKey)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => new Error(err));
});
module.exports = router;
