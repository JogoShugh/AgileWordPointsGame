require.config({
	baseUrl: "http://jogoshugh.github.com/AgileWordPointsGame/dynamic"
});

console.log(require);

/*
requirejs.config({
	shim: {
		'handlebars' : {
			exports: 'Handlebars'
		}
	}
});
*/

require('http://jogoshugh.github.com/AgileWordPointsGame/dynamic/handlebars.js', 'boot', function(Handlebars, boot) {
	document.write("Hello from boot");
	console.log(Handlebars);
});