let isNightTime = true;

if (isNightTime) {
    console.log('Turn on the lights!');
} else {
    console.log('Turn off the lights!');
}

// if and else OR ternary operator
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

let isCold = true;

isCold ? console.log('Wear a coat!') : console.log('Take off your coat!');

let stopLight = 'yellow';

if (stopLight === 'red') {
    console.log('stop!')
} else if (stopLight === 'yellow') {
    console.log('slow down.')
} else if (stopLight === 'green') {
    console.log('go!')
} else {
    console.log('caution, unknown!')
}

let season = 'summer';

if (season === 'spring') {
    console.log('It is spring')
} else if (season === 'summer'){
    console.log('It is summer')
} else if (season === 'fall') {
    console.log('It is fall')
} else if (season === 'winter') {
    console.log('It is winter')
} else {
    console.log('It is ????')
}

let groceryItem = 'papaya';

switch (groceryItem) {
    case 'tomato':
        console.log('Tomatoes are $0.49');
        break;
    case 'papaya':
        console.log('Papayas are $1.29');
        break;
    case 'lime':
        console.log('limes are $1.49');
        break;
    default:
        console.log('invalid item')
        break;
}

let GPA = "A"

let score;

switch (GPA) {
    case 'A':
        score = 100;
        break;
    case 'B':
        score = 80;
        break;
    case 'C':
        socre = 70;
        break;
    default:
        socre = 60;
}

console.log(score);