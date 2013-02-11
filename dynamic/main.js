requirejs.confg({
	shim: {
		'handlebars' : {
			exports: 'Handlebars'
		}
	}
});

require('handlebars', 'boot', function(Handlebars, boot) {
	document.write("Hello from boot");
	console.log(Handlebars);
});