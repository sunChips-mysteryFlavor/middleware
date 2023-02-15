const express = require('express');
const controllers = require('../controllers.js');

const router = express.Router();

//Question & Answers
router.get('/questions', (req, res) => {});

router.get('/questions/:question_id/answers', (req, res) => {});

router.post('/questions', (req, res) => {});

router.post('/questions/:question_id/answers', (req, res) => {});

router.put('/questions/:question_id/helpful', (req, res) => {});

router.put('/questions/:question_id/report', (req, res) => {});

router.put('/answers/:answer_id/helpful', (req, res) => {});

router.put('/answers/:answer_id/report', (req, res) => {});
