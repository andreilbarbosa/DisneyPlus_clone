const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function test(){
    console.log('Ola Mundo!');
    cb();
}

exports.default = test;