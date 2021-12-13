const hobbies = ["play piano", "play tennis", "singing"]

console.log(hobbies)

console.log(hobbies[0]);
console.log(hobbies[hobbies.length - 1]);

const daniel = ['Louie','Alex','Jenny']

let seasons = ['Winter','Spring','Summer','Fall']

hobbies[1] = 'talking with friends';
console.log('After Updated')
console.log(hobbies)


let condiments = ['Ketchup','Mustard','Soy Sauce','Sriracha'];

const utensils = ['Fork','Knife','Chopsticks','Spork'];

condiments[0] = 'Mayo'
console.log(condiments); // possible 

condiments = ['Mayo']
console.log(condiments); // possible 

utensils[0] = 'Teaspoon';
console.log(utensils); // possible 

// utensils = ['Teaspoon']
// console.log(utensils); // not possible

const newYearsResolutions = ['Keep a journal','Take a falconry class'];
console.log(newYearsResolutions.length);

const itemTracker = ['item 0','item 1','item 2'];

itemTracker.push('item 3','item 4');

console.log(itemTracker); 

subjectsList = ['American Literature','Web Development','Economics'];

subjectsList.push('Pre Calculus','AP Statistics')

console.log(subjectsList);

// .pop() removes last item

// .shift() removes first value / .unshift

// .slice() / .slice

const randomNums = ['A','B','C','D','E']

const newArray = randomNums.slice(0,1);
console.log(newArray);

const newArry2 = randomNums.slice(3);
console.log(newArry2);

const nums = [1,2,3,4,5,6,7,8,9,10];

const newNums = nums.slice(4)
console.log(newNums);

const newNums2 = nums.slice(9) // .length -1 works
console.log(newNums2);

const newNums3 = nums.slice(0,2)
console.log(newNums3);

const groceryList = ['A','A','orange juice','bananas','apples'];

console.log(groceryList.indexOf("A"));

let arr = ['a','b','a','c','a','d'];

console.log(arr.indexOf('a'));
console.log(arr.indexOf('z'));

if(arr.indexOf('z') !== -1) {
    arr[arr.indexOf('z')] = 'FOUND'
}

console.log(arr);

// ===================================================

const concept = ['arrays','can','be','mutated'];

function changeArr(array) {
    array[array.length - 1] = 'MUTATED'
    return array
    // console.log(array); // 이 대신 return array 하고 밖에서 console.log(changeArr(concept))
}

console.log(changeArr(concept));
console.log(changeArr(arr));
// changeArr(concept);

// nested arrays

const nestedArr = [[1],[2,3]];

console.log(nestedArr[1]); // output is [2,3]
console.log(nestedArr[1][0]); // output is 2

let numberCluster = [[1,2], [3,4], [5,6]];

console.log(numberCluster[1]); // [3,4]
console.log(numberCluster[2])
// numberCluster[2]= ;

console.log(numberCluster[1].length)