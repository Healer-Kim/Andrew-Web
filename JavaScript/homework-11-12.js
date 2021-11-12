/*
Calculating weather temperature in kelvin and fahrenheit
*/

let kelvin = 293; // Sets the kelvin temperature to 293 degrees.

let celcius = kelvin - 273; // Converts kelvin into celcius.

let fahrenheit = celcius * (9/5) + 32 // Converts celcius to fahrenheit

console.log(kelvin); // Prints kelvin 

console.log(celcius); // Prints celcius

console.log(fahrenheit); // Prints fahrenheit, isn't a decimal number anyway.

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)