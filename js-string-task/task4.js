// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

let str = "xxXX";

if (str.includes("x")) {
  str = str.replaceAll("x", "y");
}

if (str.includes("X")) {
  str = str.replaceAll("X", "Y");
}

console.log("str", str);
