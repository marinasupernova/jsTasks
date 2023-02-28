function sum(numbers) {
    let result = 0;

    for (i  = 0; i < numbers.length; i++ ) {
        result += numbers[i];
    }
    return result;
    
};

console.log(sum([1, 5.2, 4, 0, -1]))