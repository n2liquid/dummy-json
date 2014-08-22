#!/usr/bin/node
var fs = require('fs');
var args = require('./arguments');
var dummyjson = require('./dummy-json');

console.log (
  dummyjson.parse (
    fs.readFileSync(args.templatePath, { encoding: 'utf8' })
  )
);
