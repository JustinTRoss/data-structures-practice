var Stack = function() {

  var stackMethods = {
  	push: function(elem) {
  		this[this.length] = elem;

  		this.length++;
  	},
  	pop: function() {

  		if(this.length === 0) {
  			return "negative brother";
  		}

  		var returnVal = this[this.length - 1];
  		delete this[this.length - 1];

  		this.length--;

  		return returnVal;

  	},
  	size: function() {
  		return this.length;
  	}
  };

  var newStack = {
  	length: 0,
  	push: stackMethods.push,
  	pop: stackMethods.pop,
  	size: stackMethods.size
  };


  return newStack;
};
