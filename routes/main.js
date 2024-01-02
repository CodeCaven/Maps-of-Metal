var express = require('express');
var router = express.Router();

// Require controller modules.
var main_controller = require('../controllers/mainController');

// Routes
router.get('/', main_controller.genres);

module.exports = router;