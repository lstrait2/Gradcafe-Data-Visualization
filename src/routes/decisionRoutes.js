var express = require('express');
var router = express.Router();

// Require controller modules.
var decisionController = require('../controllers/decisionController');

// GET request for getting all institutions
router.get('/institutions', decisionController.institutionList);

// GET request for getting all decisions for a specific institution
router.get('/institutions/:name', decisionController.institutionDecisions);

module.exports = router;