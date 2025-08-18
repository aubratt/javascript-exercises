// const reverseString = (string) => {
//     let chars = [];
//     for (let i = string.length - 1; i >= 0; i--) {
//         chars += string[i];
//     }
//     return chars;
// };

// console.log(reverseString("Hello, World!"));

// My solution above works, but the solution below is more concise.

const reverseString = (string) => {
    return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
