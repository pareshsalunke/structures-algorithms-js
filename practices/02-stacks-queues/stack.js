var Stack = function () {
  this.storage = '';
};

Stack.prototype.push = function (value) {
  this.storage = this.storage.concat('***', value);
};

Stack.prototype.pop = function () {
  var lastIndex = this.storage.lastIndexOf('***');
  var popElement = this.storage.substring(lastIndex + 3);
  this.storage = this.storage.substring(0, lastIndex);

  return popElement;
};

Stack.prototype.size = function () {
  return this.storage.split('***').length - 1;
};

var UITeam = new Stack();
UITeam.push('phuphan');
UITeam.push('tuannguyen');
UITeam.push('haihuynh');

//console.log(UITeam.pop());
console.log(UITeam.size());
console.log(UITeam);
