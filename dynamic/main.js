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
	var context = {title: 'VersionOne', folks: ['Mark K', 'Mark I', 'Acey B']};
	var source = "<p>Welcome to {{title}}, <ul>{{#each folks}}<li>{{this}}</li>{{//each}}</ul></p>";
	var template = Handlebars.compile(source);
	var output = template(context);
	document.write(output);

});

