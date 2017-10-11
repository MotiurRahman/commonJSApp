var defaultMessage = "Hello world";
// we make objects, variables, functions available to the
// calling context by adding them to the exports object
exports.sayHello = function(msg) {
	alert('Hello ' + msg);
};
// we can assign other objects, functions, and variables to
// exports and they will be available to the calling context
exports.helloWorld = function() {
	Ti.API.info(defaultMessage);
}; 