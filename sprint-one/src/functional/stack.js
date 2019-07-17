var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[someInstance.size()] = value;
  };

  someInstance.pop = function() {
    if (someInstance.size() > 0) {
      var popped = storage[someInstance.size() - 1];
      delete storage[someInstance.size() - 1];
    }
    return popped;

  };

  someInstance.size = function() {
    var length = Object.keys(storage);
    return length.length;
  };

  return someInstance;
};
