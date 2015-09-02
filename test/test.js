var Pixel = require('../index');
var fs = require('fs');
var path = require('path');

var $ = require('jquery');
var request = require('request');
var env = require('jsdom').env;

var rules = require('./rule');

var fetchAndParse = function (t, callback) {
	var	url = t.url;
	request(url, function(err, res, body) {
		if (!err && res.statusCode == 200) {
			env(body, function(err, window) {
				if (!err) {
					$(window);
					t.$ = window.$
					t.content = t.$('html');
					callback(null, t.parse());
				} else {
					callback(err, null);
				}
			});
		} else {
			callback(err, null);
		}
	});
};

var jar = request.jar();

var fetcher = function (url, callback) {
	var options = {
		url:url,
		jar: jar,
		headers: {
			'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36'
		}
	};
	request(options, function(err, res, body) {
		console.log(res.statusCode)
		if (!err && res.statusCode === 200) {
			env(body, function(errr, window) {
				console.log(errr);
				console.log(body);
				if (!errr) {
					$(window);
					callback(window.$, null);
				} else {
					callback(null, errr);
				}
			});
		} else {
			callback(null, err);
		}
	});
}

var filepath = path.join(__dirname, 'rule.json');


// console.log(Pixel);

// fs.readFile(filepath, 'utf-8', function(err, string) {
//         if (err) {
//             console.log(err);
//         } else {
			
//         }
//  })
// var p = new Pixel();

// p.setup(rules.kanzhun_zhaopin, 'http://www.kanzhun.com/gso3131.html', null, fetcher)
// .then(function (data) {
// 	console.log(data);
// }, function (err) {
// 	console.log(err);
// });


// new Pixel().setup(rules.rainx, 'http://rainx.cn', null, fetcher)
// .then(function(data) {
// 	console.log(data);
// }, function (err) {
// 	console.log(err);
// });



// new Pixel().setup(rules.useragentstring, 'http://www.useragentstring.com/Chrome41.0.2228.0_id_19841.php#', null, fetcher)
// .then(function(data) {
// 	console.log(data);
// }, function (err) {
// 	console.log(err);
// });



// new Pixel().setup(rules.news_dbnotes, 'http://news.dbanotes.net/newest#', null, fetcher)
// .then(function(data) {
// 	console.log(data);
// }, function (err) {
// 	console.log(err);
// });

// new Pixel().setup(rules.alexa, 'http://www.alexa.com/topsites/category;0/Top/Computers#', null, fetcher)
// .then(function(data) {
// 	console.log(data);
// }, function (err) {
// 	console.log(err);
// });

// new Pixel().setup(rules.touzijie, 'http://www.pedaily.cn/search.aspx?t=3&w=%E6%B1%AA%E5%8D%8E', null, fetcher)
// .then(function(data) {
// 	console.log(data);
// }, function (err) {
// 	console.log(err);
// });



// new Pixel().setup(rules.dajie, 'http://so.dajie.com/corp/search?keyword=%E9%98%BF%E9%87%8C&_CSRFToken=#', null, fetcher)
// .then(function(data) {
// 	console.log(data);
// }, function (err) {
// 	console.log(err);
// });

// new Pixel().setup(rules.sf_detail, 'http://segmentfault.com/u/jiyinyiyong', null, fetcher)
// .then(function(data) {
// 	console.log(data);
// }, function (err) {
// 	console.log(err);
// });

/*
var obj = JSON.parse(rules.tzj_detail);

function traverse(obj) {

	for (var i in obj) {

		var item = obj[i];


		if (Array.isArray(item)) {

			item.forEach(function(it) {

				traverse(it)
			})
		} else {

			console.log(i, '==', item);
		}
	}
}

traverse(obj);
*/

// new Pixel().setup(rules.itjuzi, 'http://itjuzi.com/person/3112#', null, fetcher)
// .then(function(data) {
// 	console.log(data);
// }, function (err) {
// 	console.log(err);
// });


// new Pixel().setup(rules.baidu, 'http://news.baidu.com/ns?word=%E9%A9%AC%E4%BA%91', null, fetcher)
// .then(function(data) {
// 	console.log(data);
// }, function (err) {
// 	console.log(err);
// });


// for (var i in obj) {

// 	var item = obj[i];

// 	if (Array.isArray(item)) {

// 		item.forEach(function(it) {

// 			console.log(it)
// 		})
// 	} else {

// 		console.log(i, '==', item);
// 	}

// }

// new Pixel().setup(rules.tzj_detail, 'http://zdb.pedaily.cn/enterprise/%E9%98%BF%E9%87%8C%E5%B7%B4%E5%B7%B4/', null, fetcher)
// .then(function(data) {
// 	console.log(data);
// }, function (err) {
// 	console.log(err);
// });

new Pixel().setup(rules.baidu_web, 'https://www.baidu.com/s?wd=%E6%9D%8E%E7%AC%91%E6%9D%A5', null, fetcher)
.then(function(data) {
	console.log(data);
}, function (err) {
	console.log(err);
});

// var http = require('http');

// http.createServer(function (req, res) {
//   console.log(req.url);
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(1337, "127.0.0.1");

// console.log('Server running at http://127.0.0.1:1337/');
