var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var firstInLine = 0;
  var i = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[i] = value;
    i++;
  };

  someInstance.dequeue = function() {
    if (someInstance.size() > 0) {
      var popped = storage[firstInLine];
      delete storage[firstInLine];
      firstInLine += 1;
    }
    return popped;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
