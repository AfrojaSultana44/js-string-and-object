// Capitalize Every first Letter of each word in a String

const str = "i eat rice";

const words = str.split(" ");

for (let i = 0; i < words.length; i++) {
  let word = words[i];

  const upperLetter = word.charAt(0).toUpperCase();

  word = upperLetter + word.substr(1);

  words[i] = word;
}

console.log(words.join(" "));
