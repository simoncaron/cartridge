const mix = require('laravel-mix')
const path = require('path')

mix.browserSync('http://localhost:' + process.env.APP_PORT)

mix.webpackConfig({
	resolve: {
		alias: {
			'@': path.resolve('resources/sass'),
		},
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				loader: 'sass-loader',
				options: {
					additionalData: `
					  @import "~@/_variables.scss";
				`,
				},
			},
		],
	},
})

mix.copy('./static/**/*', './public')
	.js('resources/js/app.js', 'public')
	.sass('resources/sass/app.scss', 'public')
	.vue()
	.version()
