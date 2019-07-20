var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  
  if(!this._storage.includes(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  if (this._storage.indexOf(item) >= 0) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  for(var i = 0; i < this._storage.length; i++) {
    if(this._storage[i] === item) {
      this._storage.splice(i,1);
    }
  }
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
