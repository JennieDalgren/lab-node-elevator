const Elevator = require('./elevator.js');

const Person = require('./person.js');

const newElevator = new Elevator();

const jennie = new Person('Jennie', 3, 9);
const linus = new Person('Linus', 10, 0);
const natalie = new Person('Natalie', 0, 6);
const kungen = new Person('Kungen', 9, 4);


newElevator.start();

newElevator.call(jennie);
newElevator.call(linus);
newElevator.call(natalie);
newElevator.call(kungen);
