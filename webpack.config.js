const path = require("path")

module.exports = {
	context: __dirname,
	entry: "./index.js",
	output: {
		path: path.resolve("."),
		filename: "pixeljs.js"
	},
	resolve: {
		extensions: ['.js']
	}
}
