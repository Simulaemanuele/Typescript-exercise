/**
 * START: Follow the instructions below.
 */

// Change the `Country` interface so the `population` property is optional.
// This will fix the type error for `countryB`.

interface Country {
    name: string;
    code: string;
    population?: number;
}

const countryA: Country = {
    name: "India",
    code: "IN",
    population: 1_352_642_280,
};

console.log(countryA.name, countryA.code, countryA.population)

const countryB: Country = {
    name: "Italy",
    code: "IT"
};

console.log(countryB.name, countryB.code, countryB.population)
const countryC: Country = {
    name: "Spain",
    code: "ES",
    population: 47_450_795,
};

console.log(countryC.name, countryC.code, countryC.population)

// Change the `Currency` type alias so the `name` property cannot be changed.
// This will cause a type error. Remove the code that now has a type error.

type Currency = {
    readonly name: string;
    code: string;
    symbol: string;
};

const currencyData: Currency = {
    name: "Euro",
    code: "EUR",
    symbol: "€",
};


currencyData.code = "GGG";

// ----

console.log(currencyData.name, currencyData.code, currencyData.symbol)

export {};
