var Filter = require('../lib/filter').filter;
var Validate = require('../lib/filter').validate;
var Lexer = require('../lib/lexer');
var value = 'audrfeTRD:VI:12356';

var rule = 'spliti:":"|jsonn|replace:"\\\\d|\\\\w":"0"';

var rule1 = "match|\"(\\[^：\\]+)：\"|replace|\"：\"|\"\""
var value1 = "现居城市：上海市"

// console.log(Validate(rule));
// console.log(Filter(value1, rule1));

// var rule2 = "match|\"-\\[^-\\]+$\"|replace|\"-\""
// var value2 = "icon-sn-weibo"
// console.log(Filter(value2, rule2));

// var rule3 = '{"name": "[root]", "type": "{}", "def": [{"name": "name", "type": "string", "uuid": "c4563f12-76de-453c-97cf-ebfa2c788523", "last": false, "source": {"selector": "body > header > div > div > div.col-md-4 > div > div > h4", "method": "text"} }, {"name": "social_network", "type": "[]", "uuid": "027f2ee6-9c7b-4985-a1ba-3116c361cb13", "last": false, "def": [{"name": "name", "type": "string", "uuid": "3a560c1e-fb53-4445-97d2-5cca4e7f9a2e", "last": false, "source": {"selector": "body > header > div > div > div.col-md-4 > div > div > ul > li > a", "method": "[value]", "filter": "match|\'-([^-])+$\'|replace|\'-\'"} }, {"name": "value", "type": "string", "uuid": "c98dd859-417f-42b7-a411-534c0dc42fb0", "last": true, "source": {"selector": "body > header > div > div > div.col-md-4 > div > div > ul > li > a", "method": "[href]"} } ], "source": {"selector": "body > header > div > div > div.col-md-4 > div > div > ul > li", "method": "text"} }, {"name": "profile", "type": "[]", "uuid": "38f4f845-51c7-41e3-bcd9-6db1cb985249", "last": true, "source": {"selector": "body > header > div > div > div.col-md-5 > ul > li", "method": "text"}, "def": [{"name": "name", "type": "string", "uuid": "774f03fa-949b-4052-873c-2883221bd561", "last": false, "source": {"selector": "body > header > div > div > div.col-md-5 > ul > li", "method": "text", "filter": "match|\'(\\[^：\\]+)：\'|replace|\"：\"|\"\""} }, {"name": "value", "type": "string", "uuid": "17639b6b-bda3-44b9-aab0-52ecd757452a", "last": true, "source": {"selector": "body > header > div > div > div.col-md-5 > ul > li", "method": "text", "filter": "match|\"：(\\[^：\\]+)\"|replace|\"：\"|\"\""} } ] } ], "uuid": "c54ea1b3-c482-4055-930e-eb894f0e919c"}';
// var rule4 = '{"name": "[root]", "type": "{}", "def": [{"name": "name", "type": "string", "uuid": "c4563f12-76de-453c-97cf-ebfa2c788523", "last": false, "source": {"selector": "body > header > div > div > div.col-md-4 > div > div > h4", "method": "text"} }, {"name": "social_network", "type": "[]", "uuid": "027f2ee6-9c7b-4985-a1ba-3116c361cb13", "last": false, "def": [{"name": "name", "type": "string", "uuid": "3a560c1e-fb53-4445-97d2-5cca4e7f9a2e", "last": false, "source": {"selector": "body > header > div > div > div.col-md-4 > div > div > ul > li > a", "method": "[value]"} }, {"name": "value", "type": "string", "uuid": "c98dd859-417f-42b7-a411-534c0dc42fb0", "last": true, "source": {"selector": "body > header > div > div > div.col-md-4 > div > div > ul > li > a", "method": "[href]"} } ], "source": {"selector": "body > header > div > div > div.col-md-4 > div > div > ul > li", "method": "text"} }, {"name": "profile", "type": "[]", "uuid": "38f4f845-51c7-41e3-bcd9-6db1cb985249", "last": true, "source": {"selector": "body > header > div > div > div.col-md-5 > ul > li", "method": "text"}, "def": [{"name": "name", "type": "string", "uuid": "774f03fa-949b-4052-873c-2883221bd561", "last": false, "source": {"selector": "body > header > div > div > div.col-md-5 > ul > li", "method": "text"} }, {"name": "value", "type": "string", "uuid": "17639b6b-bda3-44b9-aab0-52ecd757452a", "last": true, "source": {"selector": "body > header > div > div > div.col-md-5 > ul > li", "method": "text"}, "filter": "match|\"-\\[^-\\]+$\"|replace|\"-\""} ] } ], "uuid": "c54ea1b3-c482-4055-930e-eb894f0e919c"}'
 
// var rule5 = '{"name": "[root]", "type": "{}", "def": [{"name": "name", "type": "string", "uuid": "c4563f12-76de-453c-97cf-ebfa2c788523", "last": false, "source": {"selector": "body > header > div > div > div.col-md-4 > div > div > h4", "method": "text"} }, {"name": "social_network", "type": "[]", "uuid": "027f2ee6-9c7b-4985-a1ba-3116c361cb13", "last": false, "def": [{"name": "name", "type": "string", "uuid": "3a560c1e-fb53-4445-97d2-5cca4e7f9a2e", "last": false, "source": {"selector": "body > header > div > div > div.col-md-4 > div > div > ul > li > a", "method": "[value]", "filter": "match|\'-\\\\[^-\\\\]+$\'|replace|\'-\'"} }, {"name": "value", "type": "string", "uuid": "c98dd859-417f-42b7-a411-534c0dc42fb0", "last": true, "source": {"selector": "body > header > div > div > div.col-md-4 > div > div > ul > li > a", "method": "[href]"} } ], "source": {"selector": "body > header > div > div > div.col-md-4 > div > div > ul > li", "method": "text"} }, {"name": "profile", "type": "[]", "uuid": "38f4f845-51c7-41e3-bcd9-6db1cb985249", "last": true, "source": {"selector": "body > header > div > div > div.col-md-5 > ul > li", "method": "text"}, "def": [{"name": "name", "type": "string", "uuid": "774f03fa-949b-4052-873c-2883221bd561", "last": false, "source": {"selector": "body > header > div > div > div.col-md-5 > ul > li", "method": "text", "filter": "match|\'(\\\\[^：\\\\]+)：\'|replace|\'：\'|\'\'"} }, {"name": "value", "type": "string", "uuid": "17639b6b-bda3-44b9-aab0-52ecd757452a", "last": true, "source": {"selector": "body > header > div > div > div.col-md-5 > ul > li", "method": "text", "filter": "match|\'：(\\\\[^：\\\\]+)\'|replace|\'：\'|\'\'"} } ] } ], "uuid": "c54ea1b3-c482-4055-930e-eb894f0e919c"}';


// console.log(JSON.parse(rule5))

// var rule6 = 'split|":"|"5"|index|"1"'
// var value6 = 'name:title:value'

// console.log(Filter(value6, rule6));

// var rule7 = '{"name": "[root]", "type": "{}", "def": [{"name": "name", "type": "string", "uuid": "b2290236-08c0-4def-8d5a-715468fa5270", "last": false, "source": {"selector": "#com_id_value", "method": "text"} }, {"name": "team", "type": "[]", "uuid": "ce06d34a-b8dd-4005-8e74-76a1101118a6", "last": false, "def": [{"name": "name", "type": "string", "uuid": "2c41bb1a-ac84-4ccc-8f4f-82fc3e42fe43", "last": false, "source": {"selector": "#company-member-list-tbl > tbody > tr > td:nth-child(2)", "method": "text"} }, {"name": "weibo", "type": "string", "uuid": "2b389cf0-015f-4c1d-98a7-fa706f3e9aef", "last": false, "source": {"selector": "#company-member-list-tbl > tbody > tr > td:nth-child(4) > a", "method": "[href]"} }, {"name": "avatar", "type": "string", "uuid": "c969402f-a996-4b0f-bd16-faeec212a90f", "last": false, "source": {"selector": "#company-member-list-tbl > tbody > tr > td:nth-child(1) > a > img", "method": "[src]"} }, {"name": "title", "type": "string", "uuid": "8ade5d32-2ef1-4516-a649-817de3028e39", "last": true, "source": {"selector": "#company-member-list-tbl > tbody > tr > td:nth-child(3)", "method": "text"} } ], "source": {"selector": "#company-member-list-tbl > tbody > tr", "method": "text"} }, {"name": "info", "type": "[]", "uuid": "e87bfc10-196e-4e60-a67e-f0beb15bcac5", "last": true, "def": [{"name": "name", "type": "string", "uuid": "c272536d-4b65-44e2-bffc-abba3a39ac35", "last": false, "source": {"selector": "#page-content > article > div:nth-child(2) > ul > li", "method": "text", "filter": "split|\': \'|\'2\'|index|\'0\'"} }, {"name": "value", "type": "string", "uuid": "39a7434b-a9c6-4eb7-a5e9-b8c7bd148f53", "last": true, "source": {"selector": "#page-content > article > div:nth-child(2) > ul > li", "method": "text", "filter": "split|\': \'|\'2\'|index|\'1\'"} } ] }, {"name": "avatar", "type": "string", "uuid": "dcbdcc99-c328-4a06-95d3-dc1e9b7a6f6c", "last": true, "source": {"selector": "body > div.wrapper > div:nth-child(5) > div > div.archive-logo.pull-left > img", "method": "[src]"} } ], "uuid": "71caff01-bfda-41d6-899a-3aa496ede6a7"}'

var rule8 = '{"name": "[root]", "type": "{}", "def": [{"name": "name", "type": "string", "uuid": "0d030a22-f912-4770-9ad9-9f7f1d053e6f", "last": false, "source": {"selector": "body > div.section.clearfix.pt10 > div.con-left > div.qylogo.mt20 > h1", "method": "text"} }, {"name": "avatar", "type": "string", "uuid": "c9e3c0e3-5380-4a7b-89d2-d43f94b2f686", "last": false, "source": {"selector": "body > div.section.clearfix.pt10 > div.con-left > div.qylogo.mt20 > img", "method": "[src]"} }, {"name": "summary", "type": "string", "uuid": "8b02eb3d-7bc5-42f3-a230-24a8189c905a", "last": false, "source": {"selector": "body > div.section.clearfix.pt10 > div.con-left > div.qydes > p:nth-child(3)", "method": "text"} }, {"name": "detail", "type": "[]", "uuid": "6ba12278-f0bc-4603-bed9-a148427f263c", "last": true, "def": [{"name": "name", "type": "string", "uuid": "c2cc4f50-5b63-4e2c-9463-3ca8006a05be", "last": false, "source": {"selector": "body > div.section.clearfix.pt10 > div.con-left > div.qyinfo.mt20 > ul > li", "method": "text", "filter": "split|\': \'|\'2\'|index|\'0\'"} }, {"name": "value", "type": "string", "uuid": "50b26e32-9b5e-4bf3-a962-99b52f88be20", "last": true, "source": {"selector": "body > div.section.clearfix.pt10 > div.con-left > div.qyinfo.mt20 > ul > li", "method": "text", "filter": "split|\': \'|\'2\'|index|\'1\'""} } ] } ], "uuid": "02e62ebd-dfca-4206-b627-28f597e71449"}'


console.log(JSON.parse(rule8));