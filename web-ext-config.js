module.exports = {
	build: {
		overwriteDest: true
	},
	ignoreFiles: [
		'package.json',
		'package-lock.json',
		'package-lock.json',
		'bin/',
		'dist/',
		'videos/',
		'README.md',
		'web-ext-config.js'
	],
	artifactsDir: 'dist'
};
