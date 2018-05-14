var rp = require('request-promise');
	cheerio = require('cheerio');
	cheerioTableparser = require('cheerio-tableparser');

module.exports = {

  scrape: function (uri) {
  	var options = {
  	  uri: uri,
      transform: function (body) {
        return cheerio.load(body);
      }
    };
    rp(options)
    .then(function (data) {
        cheerioTableparser(data);
        var table = data('#my-table').parsetable(false, false, false)
  		console.log(table);

    })
    .catch(function (err) {
        // REQUEST FAILED: ERROR OF SOME KIND
    });
  },
  bar: function () {
    // whatever
  }
};
