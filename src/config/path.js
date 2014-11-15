var require = {
    baseUrl: '.',

    paths: {
        'app': 'app',
        'app2': 'app',
        'jquery': 'lib/jquery/jquery',
        'underscore': 'lib/underscore/underscore',
        'backbone': '../lib/backbone/backbone'
    },

    shim: {
        'underscore': {
            exports: '_'
        }
    }
};