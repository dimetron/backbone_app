define(['jquery', 'app', 'app2', 'utils'], function($, App, App2, Utils) {
    var el = $('#main');
    var app = new App(el);
    app.render();

	var el = $('#footer');
    var app = new App2(el);
    app.render();


});