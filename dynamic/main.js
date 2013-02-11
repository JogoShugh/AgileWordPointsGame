require.config({
	baseUrl: "http://jogoshugh.github.com/AgileWordPointsGame/dynamic"
});

requirejs.config({
	shim: {
		'handlebars' : {
			exports: 'Handlebars'
		}
	}
});


require(['handlebars', 'boot'], function(hb, boot) {
	console.log(Handlebars);
	console.log('Boot loaded.');
});


/*
require(['boot'], function(boot) {

});
*/