const repeatString = (string, num) => {
    if (num < 1) {
        return "Please enter a positive number";
    }

    let repeated = "";
    for (let i = 0; i < num; i++) {
        repeated += string;
    }
    return repeated; 
};

console.log(repeatString("hey", -1));

// Do not edit below this line
module.exports = repeatString;
