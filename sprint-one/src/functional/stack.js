  // Last in First Out (like a stack of cafeteria trays)
  // Can only add to top and remove from top

  // requirements:
  // Create a size method/function.
  // Create a push method/function.
  // Create a pop method/function.
var Stack = function(){
  
  var newStack = {
    length: 0,
    size: function() {
    	return this.length;
    }, 
    push: function(element) {
      this[this.length] = element;
      this.length += 1;
    },
    pop: function() {
      if (this.length === 0) {
        return "NO";
      }
      var returnVal = this[this.length - 1];
      delete this[this.length - 1];
      this.length -= 1;
      return returnVal;
    } 
  };
  
  return newStack;
  
};
