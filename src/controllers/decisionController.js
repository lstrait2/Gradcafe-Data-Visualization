var Decision = require('../models/decision');

// Display list of all institutions.
exports.institutionList = function(req, res) {
    Decision.find({}, ' -_id institution').exec(function (err, institutionList) {
      if (err) { 
      	return next(err); 
      }
      res.json(institutionList);
    });
};

// Display all decisions for a given institution
exports.institutionDecisions = function(req, res) {
    Decision.find({'institution': req.params.name}, ' -_id ').exec(function (err, decisionList) {
      if (err) { 
      	return next(err); 
      }
      res.json(decisionList);
    });
};

// Display all decisions for a given institution for a given program
exports.institutionProgramDecisions = function(req, res) {
	Decision.find({'institution': req.params.school, 
				   'program': req.params.program}, ' -_id ').exec(function (err, decisionList) {
      if (err) { 
      	return next(err); 
      }
      res.json(decisionList);
    });
};