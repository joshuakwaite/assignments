var employees = []


function Employee(nm, jt, sal, stat) {
    this.name = nm;
    this.jobTitle = jt;
    this.salary = sal;
    this.status = (stat === undefined) ? "Full-time" : stat
    this.printEmployeeForm = function() {
        console.log(this.name)
        console.log(this.jobTitle)
        console.log(this.salary)
        console.log(this.status)   
    }
    
    
}


var jim = new Employee("Jim Halpert", "Salesman", "$50,000/yr");

var james = new Employee("James Willy", "Accountant", "$80,000/yr");

var rebekah = new Employee("Rebekah Waite", "Receptionist", "30,000/yr");

james.status = "Contract";

jim.printEmployeeForm();

employees.push(jim, james, rebekah)

console.log(employees);