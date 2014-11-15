var fs = require('fs');
var phantom, phantomjs = require('phantomjs');

module.exports = function(grunt) {

	//measure performance of the build
	require('time-grunt')(grunt);

	//load all configuration and default tasks
	require('load-grunt-config')(grunt);
	require('load-grunt-tasks')(grunt, {
		pattern: ['grunt-contrib-*', 'grunt-nightwatch']
	});

	//for headless tests we start phantomjs with port 5555
	grunt.registerTask('phantom-server-start', function() {
		var done = this.async();
		phantom = require('child_process').spawn(phantomjs.path, ['--webdriver=5555'], {
			detached: true
		});
		phantom.unref();
		phantom.stdout.on('data', function(data) {
			if (data.toString().indexOf("running") > -1) {
				done();
			}
		});
	});

	grunt.registerTask('phantom-server-stop', function() {
		grunt.log.ok("phantom-server - stop");
		phantom.kill('SIGKILL');
	});

	grunt.registerTask('usage', function() {
		console.log(':: Usage:');
		console.log('          grunt test');
		console.log('          grunt test --browser=phantomjs');
		console.log('          grunt server');
	});

	grunt.registerTask('test', ['connect', 'phantom-server-start', 'nightwatch', 'phantom-server-stop']);
	grunt.registerTask('server', ['connect::keepalive']);
	grunt.registerTask(
		'default', ['usage']);
};