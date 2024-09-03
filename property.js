const person = {
  name: "Moni",
  age: 25,
  profession: "developer",
  salary: 30000,
  married: false,
  "fav places": ["bandorban", "kuakata", "coxsbazar"]
};

// console.log(person)

// dot notation
console.log(person.profession);
const boyos = person.age;
console.log(boyos);

// bracket notation
// third bracket diye access kora
console.log(person["salary"]);
const income = person["salary"];
console.log(income);
console.log(person["fav places"])
