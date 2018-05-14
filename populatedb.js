#! /usr/bin/env node

console.log('This script populates some admissions decisions to your database. Specified database as argument - e.g.: populatedb mongodb://your_username:your_password@your_dabase_url');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}

var async = require('async')
var Decision = require('./models/decision')


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
console.log("connected to db");
var decisions = []


function decisionCreate(institution, season, year, subject, program, status, decision, decision_date, undergrad_gpa, gre_verbal, gre_quant, gre_write) {
  console.log("called function");
  decisionDetail = { 
    institution: institution,
    season: season,
    year: year,
    subject: subject,
    program: program,
    status: status,
    decision: decision,
    decision_date: decision_date,
    undergrad_gpa: undergrad_gpa,
    gre_verbal: gre_verbal,
    gre_quant: gre_quant,
    gre_write: gre_write
  }
  var decision = new Decision(decisionDetail);  
  console.log("created decision");  
  decision.save(function (err) {
    if (err) {
      console.log(err);
      return
    }
    console.log('New Decision: ' + decision);
    decisions.push(decision)
  }  );
}



decisionCreate('Mcgill University (Canada)', 'Fall', 2018, "Computer Science", "Masters", "A", "Rejected", new Date(2018, 4, 16), 3.62, 164, 168, 5.0);

