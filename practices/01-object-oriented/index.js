function Company (employee) {
  this.employee = employee;
}

Company.prototype.countEmployee = function () {
  console.log(this.employee);
};

// 1
var Vinasource = new Company(50);
Vinasource.countEmployee();

// 2
var Poeta = new Company(35);
Poeta.countEmployee();
