// The temperature in Kelvin is 293 degrees.
const kelvin = '0';
// Celsius is 273 degrees less than Kelvin
const celsius = kelvin - 273;
// Fahrenheit = Celsius * (9/5) + 32
var fahrenheit = celsius * (9/5) + 32;
// Rounds temperature
fahrenheit = Math.floor(fahrenheit);
// Prints Fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// Converts Celsius to Newton
var newton = celsius * (33/100);
// Round down
newton = Math.floor(newton);
// Prints Newton
console.log(`The temperature is ${newton} degrees Newton.`)
