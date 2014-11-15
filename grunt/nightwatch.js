module.exports = function(grunt) {

	function concatif(str, iff , suf) {
		return iff ? str + '_' + suf : str;
	}

	var useWindows = (process.platform === "win32")
	var usePhantom = (grunt.option("browser") === 'phantomjs');
	
	var nightwatchConfig = concatif('nightwatch',  useWindows, 'win');
	nightwatchConfig = usePhantom ? 'nightwatch_phantom' : nightwatchConfig;
	
	console.log('Using ' + nightwatchConfig + ' config');

	return {
		options: grunt.file.readJSON('nightwatch/config/' + nightwatchConfig + '.json')
	};
};