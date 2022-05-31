// Constant variable to keep the initial value
const kelvin = 0;

//conversion from kelvin to celsius
const celsius = kelvin - 273;

//conversion from celsius to Newton
const newton = Math.floor(celsius * (33/100));

//conversion from celsius to fahrenheit
const fahrenheit = Math.floor(celsius * (9/5) + 32);

//output string 1
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//output string 2
console.log(`The temperature is ${newton} degrees Newton.`)