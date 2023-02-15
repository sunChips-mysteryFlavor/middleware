const express = require('express');
const controllers = require('../controller');

const router = express.Router();

const url = ''; //ur module default url

// Reviews
router.get('/', (req, res) => {
  controllers.getAll(`/reviews`, url, headers);
});

router.get('/:product_id', (req, res) => {
  console.log(req.query);
});

router.get('/:product_id/reviews/', (req, res) => {
  console.log('hit styles', req.query);
});

router.get('/:product_id/reviews/meta', (req, res) => {
  console.log('hit styles', req.query);
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
