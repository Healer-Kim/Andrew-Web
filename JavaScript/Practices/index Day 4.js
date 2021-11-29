// function calculateVolume(length, height, width) {
//     console.log(width * height *length)
// }

// calculateVolume(1,2,3)


// let smallRectanger = calculateVolume(1,2,1)
// let biggerRectanger = calculateVolume(10,10,12)

// function greeting (name = 'stranger') { // default params
//     console.log(`Hello, ${name}!`)
// }

// greeting('nick');
// greeting();

// function makeShoppinglist(item1 = 'milk', item2 = 'bread', item3 = `eggs`) {
//     console.log(`item1 : ${item1}`);
//     console.log(`item2 : ${item2}`);
//     console.log(`item3 : ${item3}`);
// }

// makeShoppinglist()
// makeShoppinglist('avocado')
// makeShoppinglist('chocolate', 'banana')
// makeShoppinglist(undefined, undefined , 'coffee')

// function monitorCount(rows, columns) {
//     const numOfMonitors = rows * columns;
//     return numOfMonitors;
// }

// let numOfMonitors = monitorCount(1,2)
// console.log(numOfMonitors)

function func () {}; // no parameters

// const func = () => {} // arrow function with zero param

function func2 (name) {
    return "Hello " + name;
};

// const func2 = (name) => {};

// function plantNeedsWater (day) {
//     if(day === "Wednesday") {
//         return true;
//     } else {
//         return false;
//     }
// };



const plantNeedsWater = (day) => {
    if(day === "Wednesday") {
        return true;
    } else {
        return false;
    }
};

console.log(plantNeedsWater('Tuesday'))

// missed BLOCK!!!!!!!!!!!!!!!!!!!!!!!!


const logSkyColor = () => {
    let color = 'blue';
    console.log(color);
} // logSkyColor

const city = 'Chicago';

const logCitySkyline = () => { 
    let skyscraper = 'Willis Tower';
    console.log(skyscraper);
} 
/* 
4. Yes, accessible inside the function
5. No, not accessible outside the function
*/