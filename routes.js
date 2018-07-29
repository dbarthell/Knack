const express = require('express');
const router = express.Router();
const Tip = require('./Tip.js');

/* GET ALL TIPS */
router.get('/', function(req, res, next) {
  Tip.find(function (err, tips) {
    if (err) return next(err);
    res.json(tips);
  });
});

/* GET TIPS BY KNACK */
router.get('/:knack', function(req, res, next) {
  Book.findById(req.params.knack, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE BOOK */
router.post('/', function(req, res, next) {
  Tip.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BOOK */
router.put('/:id', function(req, res, next) {
  Tip.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/:id', function(req, res, next) {
  Tip.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;