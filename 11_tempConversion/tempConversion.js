const convertToCelsius = (tempInFahrenheit) => {
    return Math.round((tempInFahrenheit - 32) * (5 / 9) * 10) / 10;
};

console.log(convertToCelsius(100));

const convertToFahrenheit = (tempInCelsius) => {
    return Math.round((tempInCelsius * (9 / 5) + 32) * 10) / 10;
};

console.log(convertToFahrenheit(32));

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit,
};
