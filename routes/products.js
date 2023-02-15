const express = require('express');
const controllers = require('../controller');

const router = express.Router();

const url = ``;

//Products
router.get('/', (req, res) => {
  // controllers
  //   .getAll(url, req.query, req.headers.authorization)
  //   .then((response) => {
  //     res.send(response.data);
  //   });
});

router.get('/:product_id', (req, res) => {
  controllers.getAll(`products/`, req.query, headers).then((response) => {
    res.send(response.data);
  });
});

router.get('/:product_id/styles', (req, res) => {
  console.log('hit styles', req.query);
});

router.get('/:product_id/related', (req, res) => {
  console.log('hit related', req.query);
});
module.exports = router;
