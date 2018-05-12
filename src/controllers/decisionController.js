var Decision = require('../models/decision');

// Display list of all institutions.
exports.institutionList = function(req, res) {
    res.send('NOT IMPLEMENTED: Institution list');
};

// Display all decisions for a given institution
exports.institutionDecisions = function(req, res) {
    res.send('NOT IMPLEMENTED: Institution decisions: ' + req.params.name);
};