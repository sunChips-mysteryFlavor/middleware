const express = require('express');
const controllers = require('../controller');

const router = express.Router();

//port 3021
const url = process.env.MODULE_QA_URL_PROD;

//Question & Answers
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

module.exports = router

// router.get('/questions/:question_id/answers', (req, res) => {
//   /*
//     req.query
//   */
//   controllers
//     .getAll(url, , req.encryptedKey)
//     .then((response) => {
//       res.send(response.data);
//     })
//     .catch((err) => new Error(err));
// });

// router.post('/questions', (req, res) => {});

// router.post('/questions/:question_id/answers', (req, res) => {});

// router.put('/questions/:question_id/helpful', (req, res) => {});

// router.put('/questions/:question_id/report', (req, res) => {});

// router.put('/answers/:answer_id/helpful', (req, res) => {});

// router.put('/answers/:answer_id/report', (req, res) => {});
