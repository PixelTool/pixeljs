'use strict';

var Validate = require('./filter').validate;
var parse = require('./parse');

var Pixel = function () {

	this.rule = null;
	this.url = null;
	this.$ = null;
	this.window = null;
};

Pixel.validateRule = function (rule) {
	return Validate(rule);
};

Pixel.prototype.setup = function (rule, url, $, fetcher) {

	var self = this;

	var promise = new Promise(function(resolve, reject) {

		if (rule) {

			self.rule = JSON.parse(rule);
		} else {

			self.rule = null;
			reject(new Error('rule can not be null!'));
		}

		if ($) {

			self.$ = $;
			resolve(parse(self.rule, self));
		} else {

			self.$ = null;
		}

		if (url) {

			if (fetcher) {

				self.url = url;
				self.fetcher = fetcher;

				self.fetcher.call(self, self.url, function(jq, e) {

					if (e) {

						reject(e);
					} else {

						if (jq) {

							self.$ = jq;
							resolve(parse(self.rule, self));
						} else {

							reject(new Error(url + ' jQuerify failed!'));
						}
						
					}
				});
			}
		} else {

			self.url = null;
			self.fetcher = null;
		}

		if (!self.url && !self.$) {

			reject(new Error('$ and url can not both be null!'));
		} else if (self.url && !self.$ && !self.fetcher) {

			reject(new Error('fetcher can not be null!'));
		}

	});


	return promise;
};

Pixel.prototype.config = function(options) {

	if (typeof options !== 'object') {

		return Promise.reject(new Error('Invalid config options.'));
	}

	var self = this;

	var promise = new Promise(function(resolve, reject) {

		if (typeof options.rule === 'string') {

			try {

				self.rule = JSON.parse(options.rule);
			} catch(e) {

				return reject(e);
			}
		} else {

			return reject(new Error('Invalid config options.rule.'));
		}

		if (options.$) {

			self.$ = options.$;
			return resolve(parse(self.rule, self));
		} else {

			self.$ = null;
		}

		if (typeof options.url === 'string' && typeof options.fetcher === 'function') {

			self.url = options.url;

			options.fetcher(self.url)
				.then(function($) {

					self.$ = $;
					return resolve(parse(self.rule, self));
				}).catch(function(e) {

					return reject(e);
				})
		} else {

			return reject(new Error('Invalid config options.url or options.fetcher.'))
		}
	});
	return promise;
};

Pixel.prototype.parse = function() {

	var self = this;
	return new Promise(function(resolve, reject) {

		if (self.rule && self.$) {

			var rst = parse(self.rule, self);

			if (self.window && typeof self.window.close === 'function') {

				self.window.close();
				self.window = null;
			}
			self.$ = null;
			resolve(rst);
		} else {

			reject(new Error('Rule and $ cna not be null.'));
		}
	});
};

module.exports = Pixel;
