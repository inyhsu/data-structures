var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack =  Object.create(stackMethods);
  stack.storage = {};
  return stack;
};

var stackMethods = {
  push: function(value) {
    this.storage[Object.keys(this.storage).length] = value;
  },
  pop: function() {
    var length = Object.keys(this.storage).length;
    if(length > 0) {
      var popped = this.storage[length - 1];
      delete this.storage[length - 1];
    }
    return popped;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};


