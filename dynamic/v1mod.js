require.config({
	baseUrl: "http://jogoshugh.github.com/AgileWordPointsGame/dynamic"
});

require(['v1json'], function(v1) {
	window.v1 = v1;
});