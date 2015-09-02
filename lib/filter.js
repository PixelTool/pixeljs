'use strict';

var Lexer = require('./lexer');
var datefmt = require('./datefmt');

var f = function (value, filterText) {

	if (typeof filterText !== 'string') {
		return value;
	}
	;
	var rst = value;

	var lexer = new Lexer();
	var rules = parseRules(lexer.lex(filterText));

	var filters = {
		'lowercase': lowercaseFilter,
		'uppercase': uppercaseFilter,
		'date': dateFilter,
		'substr': substrFilter,
		'substring': substringFilter,
		'json': jsonFilter,
		'index': indexFilter,
		'split': splitFilter,
		'replace': replaceFilter,
		'match': matchFilter,
		'placeholder': placeholderFilter
	};

	for (var i in rules) {
		execFilter(rules[i]);
	}

	function execFilter(filter) {
		for (var name in filters) {
			if (name === filter.name) {
				rst = filters[name](rst, filter.params);
			}
		}
	}

	return rst;
}

var v = function (filterText) {

	if (!Lexer.validate(filterText)) {
		return false;
	}

	var filters = {
		'lowercase': lowercaseFilter,
		'uppercase': uppercaseFilter,
		'date': dateFilter,
		'substr': substrFilter,
		'substring': substringFilter,
		'json': jsonFilter,
		'index': indexFilter,
		'split': splitFilter,
		'replace': replaceFilter,
		'match': matchFilter,
		'placeholder': placeholderFilter
	};

	function validateRules(rules) {
		for (var i in rules) {
			var rule = rules[i];
			if (rule.identifier) {
				var r = false;
				for (var filter in filters) {
					if (filter === rule.text) {
						r = true;
					}
				}

				if (!r) {
					console.log('No filter match ' + rule.text + '!');
					return false;
				}
			}
		}
		return true;
	}

	var lexer = new Lexer();
	return validateRules(lexer.lex(filterText));
}

function parseRules(rules) {
	var filters = []
	var currentFilter;
	if (rules.length > 0) {
		for (var i in rules) {
			parseRule(rules[i]);
		}
	}

	function parseRule(rule) {
		if (rule.identifier) {
			currentFilter = {};
			filters.push(currentFilter);
			currentFilter.name = rule.text;
			currentFilter.params = [];
		}

		if (rule.constant) {
			currentFilter.params.push({text: rule.text, value: rule.value});
		}
	}

	return filters;
}


var lowercaseFilter = function (value) {
	return typeof value === 'string' ? value.toLowerCase() : value;
}

var uppercaseFilter = function (value) {
	return typeof value === 'string' ? value.toUpperCase() : value;
}

var dateFilter = function (value, params) {
	var format = params[0] ? params[0].value : 'yyyy-mm-dd';
	var time = datefmt.strtotime(value);
	if (typeof time === 'number') {
		var date = new Date();
		date.setTime(time);
		return datefmt.fmt(date, format);
	}
	return value;
}

var substrFilter = function (value, params) {
	var start = params[0] ? params[0].value : undefined;
	var length = params[1] ? params[1].value : undefined;
	return typeof value === 'string' ? value.substr(start, length) : value;
}

var substringFilter = function (value, params) {
	var start = params[0] ? params[0].value : undefined;
	var to = params[1] ? params[1].value : undefined;
	return typeof value === 'string' ? value.substring(start, to) : value;
}

var jsonFilter = function (value) {
	try {
		value = JSON.stringify(value);
	} catch (e) {
		console.log('[jsonFilter]', e.message);
	} finally {
		return value;
	}
}

var splitFilter = function (value, params) {
	var delimiter = params[0] ? params[0].value : undefined;
	var limit = params[1] ? params[1].value : undefined;
	return typeof value === 'string' ? value.split(delimiter, limit) : value;
}

var indexFilter = function (value, params) {

	var index = params[0] ? params[0].value : undefined;

	if (Array.isArray(value) && index !== undefined && index < value.length) {

		return value[index];
	}
	return value;
}

var replaceFilter = function (value, params) {
	var pattern = params[0] ? params[0].value : undefined;
	var replacement = params[1] ? params[1].value : '';
	if (pattern) {
		var regexp = new RegExp(pattern, 'ig');
		return typeof value === 'string' ? value.replace(regexp, replacement) : value;
	}
	return value;
}

var matchFilter = function (value, params) {
	var pattern = params[0] ? params[0].value : undefined;
	if (pattern) {
		var regexp = new RegExp(pattern, 'ig');
		var rst = value ? value.match(regexp) : null;
		return typeof value === 'string' ? (rst ? rst[0] : value) : value;
	}
	return value;
}

var placeholderFilter = function (value, params) {

	if (typeof value === 'string') {

		value = value.trim()
	}

	if (value !== null && value !== undefined && Boolean(value)) {

		return value;
	}

	return params[0] ? params[0].value : 'default';
}

module.exports = {filter: f, validate: v};
