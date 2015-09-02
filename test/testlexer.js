
var Lexer = require('../lib/lexer');

var lexer = new Lexer();
var rule = "substr:1:3|replace:'\\s|\\d+':'12'";
var tokens = lexer.lex("substr:1:3|replace:'\\s|\\d+':'12'");

console.log(Lexer.validate(rule));

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
			currentFilter.params.push({text:rule.text, value:rule.value});
		}
	}
	return filters;
}

tokens = "match|\"\\\\(\\\\[^：\\\\]\\\\+\\\\)：\"|replace|\"：\"|\"\"";

var tokens2 = "match|\"/w/\"";

console.log(lexer.lex(tokens2));