// My age to compare with dog years
const myAge = 19;
// First two years of a dog's life is counted differently than the rest
var earlyYears = 2;
earlyYears = earlyYears * 10.5;
// For rest of the years
var laterYears = myAge - 2;
// To calculate the number of dog years accounted for by your later years
laterYears = laterYears * 4;
// Adds both early and later years into one variable
var myAgeInDogYears = earlyYears + laterYears;
// Adds name
const myName = 'Jacob Wheeler'.toLowerCase();
// Prints my name, human age, and age in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
