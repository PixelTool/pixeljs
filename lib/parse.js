var Filter = require('./filter').filter;

function Parse(originRule, $) {

	var parse = function (rule, ps /* parent selector string or filter selector */) {

		var rst;
		var name, type, def, source;

		for (var key in rule) {
			if (key === 'name') {
				name = rule['name'];
			} else if (key === 'type') {
				type = rule['type'];
			} else if (key === 'def') {
				def = rule['def'];
			} else if (key === 'source') {
				source = rule['source'];
			}
		}

		if (name === '[root]') {
			if (type === '{}') {
				rst = {};
				var ss;
				if (source && source.selector) {
					ss = source.selector;
				}
				for (var i in def) {
					var r = parse(def[i], ss);
					if (r) {
						if (r && r.name && r.value) {
							rst[r.name] = r.value;
						}
					}
				}
			} else if (type === '[]') {

				var ret = resultForTypeArray(name, source, def, ps);

				if (ret && ret.value) {

					rst = ret.value;
				}
			}
		} else {
			if (type === 'string') {

				rst = resultForTypeString(name, source, ps);
			} else if (type === '[]') {

				rst = resultForTypeArray(name, source, def, ps);
			} else if (type === '{}') {
				var tempRst = {};
				var ss;
				if (source && source.selector) {
					ss = source.selector;
				}
				for (var i in def) {
					var r = parse(def[i], ss);
					if (r && r.name && r.value) {
						tempRst[r.name] = r.value;
					}

				}
				if (!isEmpty(tempRst)) {
					rst = {}
					rst.name = name;
					rst.value = tempRst;
				}
			}
		}
		return rst;
	};


	function resultForTypeString(name, source, ps) {

		var rst;

		if (source) {

			var val;
			if (source.selector && source.method) {

				var method = source.method,
					ss = source.selector,
					filterText = source.filter || null,
					items;

				if (ps) {
					if (typeof ps === 'string') {
						items = $(ss).filter(ps + ' *');
					} else {
						items = $(ss).filter(ps.find('*'));
					}
				} else {
					items = $(ss);
				}

				if (items.length > 1) {
					val = [];
					items.each(function(index) {
						var tempVal;
						if (method === 'text') {
							tempVal = $(this).text();
						} else if (method === 'html') {
							tempVal = $(this).html();
						} else if (method.search(/\[/) >= 0) {
							var attr = method.replace('[','').replace(']','')
							tempVal = $(this).attr(attr);
						}

						if (filterText && tempVal) {
							tempVal = Filter(tempVal, filterText);
						}
						if (tempVal) {
							val.push(tempVal);
						}
					});

				} else {

					if (method === 'text') {
						val = items.text();
					} else if (method === 'html') {
						val = items.html();
					} else if (method.search(/\[/) >= 0) {
						var attr = method.replace('[','').replace(']','')
						val = items.attr(attr);
					}

					if (filterText && val) {

						val = Filter(val, filterText);
					}
				}
			}
			if (val) {

				rst = {};
				rst.name = name;
				rst.value = val
				if (Array.isArray(val)) {
					if (val.length === 1) {

						rst.value = val[0];
					} else {

						rst.len = val.length;
					}
				}
			}
		}

		return rst;
	}


	function resultForTypeArray(name, source, def, ps) {

		var rst, tempRst = [], ss;

		if (source && source.selector) {

			ss = source.selector;
		}

		if (ss && $(ss).length >= 1) {
			$(ss).each(function() {
				var obj = {};
				for (var i in def) {
					var r = parse(def[i], $(this));
					if (r && r.name && r.value) {
						obj[r.name] = r.value;
					}
				}
				if (!isEmpty(obj)) {
					tempRst.push(obj);
				}
			});

		} else {

			var max = 0;
			var list = [];

			def.forEach(function(item) {

				var r = parse(item, ss);
				if (r && r.name && r.value) {
					list.push(r);
					var len = r.len;
					if (len) {

						max = max < len ? len : max;
					}
				}
			});


			if (max > 0) {

				for (var i = 0; i < max; i++) {
					var r = {};
					list.forEach(function(item) {
						var val = item.value;
						if (Array.isArray(item.value)) {

							val = item.value[i];
						}
						if (val) {
							r[item.name] = val;
						}
					});

					if (!isEmpty(r)) {
						tempRst.push(r);
					}
				}
			} else {

				var r = {};
				list.forEach(function(item) {

					r[item.name] = item.value;
				});

				if (!isEmpty(r)) {
					tempRst.push(r);
				}
			}
		}

		if (tempRst && tempRst.length) {

			rst = {};
			rst.name = name;
			rst.value = tempRst;
		}
		return rst;
	}

	function isEmpty(obj) {
		if (!obj) {return true;}
		return Object.keys(obj).length === 0;
	}

	return parse(originRule);
}


module.exports = Parse;