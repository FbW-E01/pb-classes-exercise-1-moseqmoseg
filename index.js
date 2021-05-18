class Employee {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        // Complete the code!
    }

    fullname() {
        console.log(`${this.firstname} ${this.lastname}`);
    }
    email() {
        console.log(`${this.firstname}.${this.lastname}@company.com`.toLowerCase());
    }


}

const emp1 = new Employee("John", "Smith");
const emp2 = new Employee("Mary", "Sue");
const emp3 = new Employee("Antony", "Walker");

emp1.fullname();
emp2.email();
console.log(emp3.firstname);