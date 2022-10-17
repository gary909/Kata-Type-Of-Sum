function typeOfSum(a, b) {
    mySum = a + b;
    return typeof mySum
}

console.log(typeOfSum(12, 1)); // 'number'
console.log(typeOfSum('d', 1)); // 'string'
console.log(typeOfSum(1, 'a')); // 'string'
console.log(typeOfSum('dd', '')); // 'string'
console.log(typeOfSum(null, false)); // 'number'