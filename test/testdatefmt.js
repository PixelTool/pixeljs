'use strict';
var strtotime = require('./datefmt').strtotime,
  fmt = require('./datefmt').fmt,
  Filter = require('./filter');


var text = "2008年5月20日, 11:20:30.345";
var rule = "replace:'年|月':'/'|replace:'日':''|date:'yyyy/mm/dd HH:MM:ss'"
console.log(Filter(text, rule));

