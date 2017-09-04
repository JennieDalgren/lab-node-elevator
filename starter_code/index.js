const Elevator = require('./elevator.js');

const Person = require('./person.js');

const newElevator = new Elevator();
const jennie = new Person('Jennie', 3, 9);
const linus = new Person('Linus', 10, 0);


newElevator.start();
newElevator.call(jennie);
