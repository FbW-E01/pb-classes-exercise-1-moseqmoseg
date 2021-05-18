class Employee {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.fullname = `${this.firstname} ${this.lastname}`;
        this.email = `${this.firstname}.${this.lastname}@company.com`.toLowerCase();
        // Complete the code!
    }


}

const emp1 = new Employee("John", "Smith");
const emp2 = new Employee("Mary", "Sue");
const emp3 = new Employee("Antony", "Walker");

console.log(emp1.fullname);

console.log(emp2.email);

console.log(emp3.firstname);