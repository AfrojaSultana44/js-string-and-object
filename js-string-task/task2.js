
// Count how many times a string has the letter a or A
const stringMathcer = (str) => {
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "a" || str[i]==="A") {
        count++;
      }
    }
    return count;
  };
  
  console.log(stringMathcer("i Am reading a book AA aaa"));


 

