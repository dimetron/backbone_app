define(['underscore'], function(_) {

	var moduleCount = 1;
	console.log("Utils define")

	var Utils = function() {
		console.log("Utils constructor")
	}

	Utils.prototype.getCount = function(){
		return moduleCount;
	}
	return Utils;
})