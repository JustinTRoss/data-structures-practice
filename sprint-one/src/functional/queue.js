var Queue = function(){
  var line = {};

  line.length = 0;
  line.keyToRemove = 0;
  line.keyToAdd = 0;

  line.enqueue = function(elem) {
  	
  	line[line.keyToAdd] = elem;
	
	line.keyToAdd++;
	line.length++;
  };

  line.dequeue = function() {

  	if(line.length === 0) {
  		return "nope";
  	}

  	var valToReturn = line[line.keyToRemove];

  	delete line[line.keyToRemove];

  	line.keyToRemove++;
  	line.length--;

  	return valToReturn;
  };

  line.size = function() {
  	return line.length;
  };

  return line;
};
