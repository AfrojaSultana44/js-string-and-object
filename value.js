const person = {
  name: "Moni",
  age: 25,
  profession: "developer",
  salary: 30000,
  married: false,
  "fav places": ["bandorban", "kuakata", "coxsbazar"],
};
person.salary = 40000;
person["age"] = 26;
person["fav places"] = ["maldives", "pataya", "phuket"];
console.log(person);
console.log(person["fav places"])
const keyName = "profession"
console.log(person[keyName])
const propName = "profession"
person[propName] = "devOps"
console.log(person)