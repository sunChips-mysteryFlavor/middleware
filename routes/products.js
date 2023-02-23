const express = require('express');
const controllers = require('../controller');
//const accessTokenAuth = require('../helper/accessTokenAuth');

const router = express.Router();

const url = process.env.MODULE_PRODUCTS_URL_DEV;
//Products

router.get('*', (req, res) => {
  controllers
    .global(url, req)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.status(500).send(new Error(err));
    });
});

// router.get('/', (req, res) => {
//   console.log('encrypt', req.encryptedKey);

//   controllers
//     .getAll(url, req.params, req.encryptedKey)
//     .then((response) => {
//       res.send(response.data);
//     })
//     .catch((err) => new Error(err));
// });

// router.get('/:product_id', (req, res) => {
//   controllers
//     .getAll(url, req.query, req.encryptedKey)
//     .then((response) => {
//       res.send(response.data);
//     })
//     .catch((err) => new Error(err));
// });

// router.get('/:product_id/styles', (req, res) => {
//   controllers
//     .getAll(url, req.query, req.encryptedKey)
//     .then((response) => {
//       res.send(response.data);
//     })
//     .catch((err) => new Error(err));
// });

// router.get('/:product_id/related', (req, res) => {
//   controllers
//     .getAll(url, req.query, req.encryptedKey)
//     .then((response) => {
//       res.send(response.data);
//     })
//     .catch((err) => new Error(err));
// });
module.exports = router;
