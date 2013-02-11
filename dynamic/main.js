require.config({
	baseUrl: "http://jogoshugh.github.com/AgileWordPointsGame/dynamic",
	config: {
		text: {
			useXhr: function () { return true; }
		}
	}
});

requirejs.config({
	shim: {
		'handlebars' : {
			exports: 'Handlebars'
		}
	}
});

require(['handlebars', 'boot', 'text!./hello.html'], function(hb, boot, helloTmpl) {
	var context = {title: 'VersionOne', folks: ['Mark K', 'Mark I', 'Acey B']};
	console.log(helloTmpl);
	var template = Handlebars.compile(helloTmpl);
	var output = template(context);
	document.write(output);

});