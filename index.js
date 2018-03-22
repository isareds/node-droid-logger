'use strict';
var colors = require('colors/safe');

exports.d = function(tag, message){
    var incipit = "D::";
    var space = " ";

    var date = new Date();
    var debugDate = date.getDate() + "/"
    + (1+date.getMonth()) + "/" + date.getFullYear() + space
    + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    var tag = incipit + tag;

    console.log(colors.white(tag) + space + "(" + colors.italic(debugDate) + ")" + " -> " + colors.grey(message));
}

exports.w = function(tag, message){
    var incipit = "W::";
    var space = " ";

    var date = new Date();
    var debugDate = date.getDate() + "/"
    + (1+date.getMonth()) + "/" + date.getFullYear() + space
    + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    var tag = incipit + tag;

    console.log(colors.yellow(tag) + space + "(" + colors.italic(debugDate) + ")" + " -> " + colors.grey(message));
}

exports.e = function(tag, message){
    var incipit = "E::";
    var space = " ";

    var date = new Date();
    var debugDate = date.getDate() + "/"
    + (1+date.getMonth()) + "/" + date.getFullYear() + space
    + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    var tag = incipit + tag;

    console.log(colors.red(tag) + space + "(" + colors.italic(debugDate) + ")" + " -> " + colors.grey(message));
}