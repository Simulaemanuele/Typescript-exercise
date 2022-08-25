/**
 * START: Follow the instructions below.
 */

interface Country {
    name: string;
    code: string;
}

// Complete the `CountryWithPopulation` interface:
//
// - Extend the `Country` interface
// - Add a `population` property with an appropriate type

interface CountryWithPopulation extends Country {
    population: number;
}

const countryA: CountryWithPopulation = {
    name: "India",
    code: "IN",
    population: 1_352_642_280,
};

const countryB: Country = {
    name: "Italy",
    code: "IT"
};

const countryC: CountryWithPopulation = {
    name: "Spain",
    code: "ES",
    population: 47_450_795,
};

console.log(countryA.name, countryA.code, countryA.population)
console.log(countryB.name, countryB.code) // countryB.population in this case not exist within the obj, because this type extends country interface instead Country with population
console.log(countryC.name, countryC.code, countryC.population)

// ----

export {};
