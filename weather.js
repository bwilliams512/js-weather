/*
This a JavaScript project that converts Kelvin temperatures to Celsius,
then to Fahrenheit and Newton.
*/

// Start with the forecast today in Kelvin
const kelvin = 293;

// Convert Kelvin to Celsius
const celsius = kelvin - 273;

// Convert Celsius to Fahrenheit
let fahrenheit = celsius * (9 /5) + 32;

// Round the number down saved to fahrenheit
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Convert to Newton
let newton = celsius * (33 / 100);

// Round the number down saved to newton
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);
