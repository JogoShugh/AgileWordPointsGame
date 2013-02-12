require.config({
	baseUrl: 'https://raw.github.com/JogoShugh/AgileWordPointsGame/gh-pages/requestor/Scripts'
});

requirejs.config({
	// The shim allows these non-AMD scripts to participate
	// in the AMDified loading for other modules
    shim: {
    	'underscore': {
    		exports: '_'
    	}
        ,'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
        ,'jsrender' : {
        	deps: ['jquery']
        }
    }
});

require([       
        'config',
	    'v1assetEditor',
        'jquery',
        'backbone',
        'backbone-forms',
        'editors/list',
        'templates/bootstrap', 
    	'toastr',
        'jsrender'
    ],
    function(
        v1config,
        v1assetEditor,
        $)
    {
        $.mobile.initializePage();            
        window.v1AssetEditor = new v1assetEditor(v1config);
        window.v1AssetEditor.on("assetFormCreated", function(assetForm) {
            window.v1RequestForm = assetForm;
        });
        console.log(window.v1AssetEditor);
        console.log(window.v1RequestForm);
	}
);