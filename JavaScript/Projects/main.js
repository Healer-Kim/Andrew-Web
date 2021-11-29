// Question #1
console.log('Question #1')

// Adds num1 and num2 and prints the sum.
function addition(num1, num2) {
    sum = num1 + num2;
    console.log(sum);
};

addition(1,2); // Prints 3 (from 1 + 2 = 3)


console.log('');


// Question #2
console.log('Question #2')

// Calculates the area of a circle with a given radius.
function circleArea(radius) {
    area = Math.pow(radius,2) * 3.14;
    console.log(area);
};

circleArea(5); // Prints 78.5 (from 5^2 * 3.14 = 78.5)


console.log('');



// Question #3
console.log('Question #3');

// Calculates the sum, prints the sum, checks to see if the sum is less than 100, then prints true or false depending on the limits. 
function lessThan(value1, value2) {
    sum = value1 + value2;
    console.log(`The sum is ${sum}`)
    if (sum < 100) {
        console.log(true);
    } else {
        console.log(false);
    };
};

lessThan(50,30); // Sum is 80, prints true

console.log('');

lessThan(50,50); // Sum is 100, prints false

console.log('');

lessThan(50,100); // Sum is 150, prints false


console.log('');


// Question #4
console.log('Question #4');

function leapYear(year) {
    resultYear = year % 4;
    if (resultYear == 0) {
        console.log(true);
    } else {
        console.log(false);
    };
};

leapYear(2000); // Prints true

leapYear(2003); // Prints false


console.log('');


//Question #5
console.log('Question #5');

// Takes two arguments as integers. Return true if one of them is 10 or their sum is 10.
function ten(int1, int2) {
    sum = int1 + int2;
    const result = (sum === 10) || (int1 === 10) || (int2 === 10);
    console.log(result);
}

ten(10,20); // true
ten(9,18); // false
ten(6,4); //true
