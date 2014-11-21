define(['underscore'], function(_) {

	var moduleCount = 0;

	console.log("Utils package created")

	var Utils = function() {
		moduleCount++;
		console.log("Utils object created - " + moduleCount)
	}

	Utils.prototype.getCount = function(){
		return moduleCount;
	}
	return Utils;
})