define(['underscore', 'utils', 'backbone'], function(_, Utils, Backbone) {

    var App = function(el) {
        this.el = el;
    };

    App.prototype.render = function() {
        this.el.html('require.js up and running');
    };

    App.prototype.getModule = function() {
    	return Utils;
    };

    return App;

});


define('app2', ['underscore', 'utils'], function(_, Utils){

	var App2 = function(el) {
        this.el = el;
    };

    App2.prototype.render = function() {
        this.el.html('<div style="color:red">Backbone version:' + Backbone.VERSION + '</div>');
    };

    App2.prototype.getModule = function() {
    	return Utils
    };

    return App2;
}) 