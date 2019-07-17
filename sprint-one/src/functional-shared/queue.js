var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};
  someInstance.firstInLine = 0;
  someInstance.i = 0;

  extend(someInstance, queueMethods);

  return someInstance;



};

var extend = function(obj, methods) {
	var keys = Object.keys(methods);
	var length = keys.length
	for (var i = 0; i < length; i++) {
		obj[keys[i]] = methods[keys[i]];
	}
}

var queueMethods = {
	enqueue: function(value) {
		this.storage[this.i] = value;
		this.i++;

	},
	dequeue: function() {
		if(Object.keys(this.storage).length > 0) {
			var popped = this.storage[this.firstInLine];
			delete this.storage[this.firstInLine];
			this.firstInLine += 1;
		}
		return popped;

	}, 
	size: function() {
		return Object.keys(this.storage).length;

	}
};


