require.config({
	baseUrl: "http://jogoshugh.github.com/AgileWordPointsGame/dynamic"
});

requirejs.config({
	shim: {
		'handlebars' : {
			exports: 'Handlebars'
		}
	},
	text: {
		useXhr: function () { return true; }
	}

});

require(['handlebars', 'boot', 'text!hello.html.js'], function(hb, boot, helloTmpl) {
	var context = {title: 'VersionOne', folks: ['Mark K', 'Mark I', 'Acey B']};
	console.log(helloTmpl);
	var template = Handlebars.compile(helloTmpl);
	var output = template(context);
	document.write(output);

});