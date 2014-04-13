var Token = require('./model/token').Token;
var qr = require('qr-image'); 
var fs = require('fs');

module.exports.token_create = function (info) {
	return function(done) {
		var token = new Token(info);
		var image = qr.image(JSON.stringify(token), {type: 'svg'});
		image.pipe(fs.createWriteStream('./public/upload/'+token._id+'.svg'));
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
