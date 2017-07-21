function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }
    return "odd";
}

//console.log(isOddOrEven("opar"));
console.log(isOddOrEven("opa").length);

module.exports = {isOddOrEven};//for the file from which we import
