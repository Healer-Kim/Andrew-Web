// create function that calculate 
// matrix;

let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

secretMessage.pop(); // 2. Remove the last string of the array

arrayLength = secretMessage.length;
console.log(arrayLength); // 3. Log the length of the array

/* 4. Add the following words to the end of the array in order:
“to”
“Program”
*/
secretMessage.push('to','Program') 

var indexEasily = secretMessage.indexOf('easily'); // 5. Change the word “easily” -> “right 
if (indexEasily !== -1) {
  secretMessage[indexEasily] = 'right';
}

secretMessage.shift(); // 6. Remove the first string

secretMessage.unshift('Programming','or','Coding') /*7. Add the following string to the beginning of the array in order:
“Programming”
“or”
“Coding”
*/

let slicedArray = secretMessage.slice(22,25); // 8. Slice the array which contains the last three elements of the original array

console.log(slicedArray.length);

var lastElement = slicedArray[slicedArray.length - 1];
var lastIndexSliced = slicedArray.indexOf(lastElement);
if (slicedArray.length > 2) {
  slicedArray[lastIndexSliced] = 'UPDATED';
} else {
  slicedArray.pop();
}
console.log(slicedArray);

console.log(secretMessage);

