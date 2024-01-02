var express = require('express');
var router = express.Router();

// Require controller modules.
var index_controller = require('../controllers/indexController');

// Routes
router.get('/', index_controller.genres);

module.exports = router;
