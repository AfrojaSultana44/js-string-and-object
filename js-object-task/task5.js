// Loop through an object and print the key-value pairs with their types

// solution-1
let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

const keys = Object.keys(myObject);
console.log(keys)

for (const key of keys) {
  const valueType = typeof myObject[key];
    console.log("key:", key, "|", "type:", valueType);
}


// solution-2
for (const prop in myObject) {
  const valueType = typeof myObject[prop];
  console.log("key:", prop, "|", "type:", valueType);
}
