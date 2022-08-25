"use strict";
/**
 * START: Follow the instructions below.
 */
exports.__esModule = true;
var countryA = {
    name: "India",
    code: "IN",
    population: 1352642280
};
var countryB = {
    name: "Italy",
    code: "IT"
};
var countryC = {
    name: "Spain",
    code: "ES",
    population: 47450795
};
console.log(countryA.name, countryA.code, countryA.population);
console.log(countryB.name, countryB.code); // countryB.population in this case not exist within the obj, because this type extends country interface instead Country with population
console.log(countryC.name, countryC.code, countryC.population);
