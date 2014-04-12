var Token = require('./model/token').Token;


module.exports.token_create = function (info) {
	return function(done) {
		var token = new Token(info);
		token.save(function save(err, token){
			if(err){
// Handle error				console.log("handle error")
				return done(null,0);
			} else {
				return done(null,token);
			}
		});

	}
};
