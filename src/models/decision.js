var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DecisionSchema = new Schema(
  {
    institution: {
    	type: String, 
    	required: true
    },
    season: {
    	type: String,
    	required: true,
    	enum: ['Fall', 'Spring'],
    },
    year: {
    	type: Number,
    	required: true,
    	min: 2000,
    	max: 2020,
    	validate: {
    		validator : Number.isInteger
  		}
    },
    // subject of study (e.g. Computer Science)
    subject: {
    	type: String,
    	required: true,
    },
    program: {
    	type: String, 
    	required: true, 
    	enum: ['Masters', 'PhD']
    },
    status: {
    	type: String, 
    	required:true, 
    	enum: ['A', 'O', 'I']
    },
    decision: {
    	type: String, 
    	required:true, 
    	enum: ['Accepted', 'Rejected', 'Wait listed']
    },
    decision_date: {
    	type: Date, 
    	required:true
    },
    undergrad_gpa: {
    	type: Number,
    	min: 0.0,
    	max: 4.0
    },
    gre_verbal: {
    	type: Number,
    	min: 130,
    	max: 170,
    	validate: {
    		validator : Number.isInteger
  		}
    },
    gre_quant: {
    	type: Number,
    	min: 130,
    	max: 170,
    	validate: {
    		validator : Number.isInteger
  		}
    },
    gre_write: {
    	type: Number,
    	min: 0.0,
    	max: 6.0
    },

});
// export model
module.exports = mongoose.model('Decision', DecisionSchema);