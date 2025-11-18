

function Person(firstName, lastName){

    this.firstName = firstName;
    this.lastName = lastName;

}

// Greeting
Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
}

// Full name
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

const javid = new Person("Jagan", "Javid");

console.log(javid);

console.log(javid.greeting());


// console.log(javid);

// Customer Object

function Customer(firstName, lastName, phone, membership){

    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;

}

// Inherit the person prototype methods to customer

Customer.prototype = Object.create(Person.prototype);


const javidCustomer = new Customer("Jagan", "Javid", "111-1111-111", "standard");


console.log(javidCustomer);
console.log(javidCustomer.greeting());

