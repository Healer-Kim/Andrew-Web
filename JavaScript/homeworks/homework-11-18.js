let raceNumber = Math.floor(Math.random() * 1000) ; //1

let registerEarly = true; //2

let runnerAge = 28; //3

if (runnerAge >= 18 && registerEarly) {
    console.log('The runner is an adult');
    raceNumber + 1000;
} else {
    console.log('The runner is not an adult');
}

if (runnerAge > 18 && registerEarly === true) {
    console.log(`Racer ${raceNumber} will be start racing at 9:30AM.`);
} else if (runnerAge > 18 && registerEarly === false) {
    console.log(`Racer ${raceNumber} will be start racing at 11:00AM.`);
} else if (runnerAge < 18){
    console.log(`Youth racer ${raceNumber} will be start racing at 12:30AM.`);
} else {
    console.log(`Racer ${raceNumber}, please go to the registration desk.`);
}