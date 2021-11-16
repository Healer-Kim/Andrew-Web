// if (true) {
//     console.log('this message will print!');
// }

// let x = 2;

// if(x<1) {
//     console.log('This statement will not print!');
// } else {
//     console.log("x is greater than 1!")
// }

// /*
// less than <
// greater than >

// less than or equal to <=
// greater than or equal to >=

// is equal to ===
// is NOT equal to !==
// */

// //Exercises 

// let hungerLevel = 7;
// if (hungerLevel>7) {
//     console.log("Time to eat!");
// } else {
//     console.log("We can eat later!");
// }

// /*
// And operator &&

// Or operator ||

// Not operator !
// */

// let mood = "sleepy";

// let tirednessLevel = 6;

// if (mood === 8 && tirednessLevel > 8) {
//     console.log("Time to sleep")
// } else {
//     console.log("not be time yet")
// }



// let y = null

// let z;
// console.log(z) //undefined

// let wordCount = 0; //falsy

// let x = "a" //truthy

// let username = '';
// let defaultName = username || 'stranger';
// console.log(defaultName)

let tool = '';
let writingUtensils = tool || 'pen'
console.log(`The ${writingUtensils} is mightier than the sword`)