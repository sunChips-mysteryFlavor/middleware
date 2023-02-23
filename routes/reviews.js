const express = require('express');
const controllers = require('../controller');

const router = express.Router();

const url = process.env.MODULE_REVIEWS_URL_PROD; //ur module default url

// Reviews
router.get('*', (req, res) => {
  controllers
    .global(url, req)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.status(500).send(new Error(err))
    });
});

module.exports = router;

//Products
// router.get('/', (req, res) => {
//   controllers.getAll(`/products`);
// }); // ;

// router.get('/:product_id', (req, res) => {
//   console.log(req.query);
// });

// router.get('/:product_id/styles', (req, res) => {
//   console.log('hit styles', req.query);
// });

// router.get('/:product_id/related', (req, res) => {
//   console.log('hit related', req.query);
// });
// module.exports = router;
