require.config({
	baseUrl: "http://jogoshugh.github.com/AgileWordPointsGame/dynamic"
});

require(['jquery', 'v1json'], function($, v1) {
	console.log(v1);
	$.ajax("http://eval.versionone.net/platformtest/rest-1.v1/Data/Story/1002?accept=application/json&sel=Name,Description,Estimate").done(function(data) { console.log(v1.jsonClean(data)); });
});