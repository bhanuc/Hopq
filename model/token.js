/*jslint node:true*/
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Token_Schema = new Schema({
    number : { type: String, default: ''},
	madeon : { type : Date, default: Date.now },
	destination : {type: String, default: ''},
	origin : {type: String, default: ''},
	token: {type: String, default: ''}
});

mongoose.model('Token', Token_Schema);
var Token = mongoose.model('Token');

exports.Token = Token;