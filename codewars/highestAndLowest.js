function highAndLow(numbers) {
    numbers = numbers.split(' ').map(Number)
    let highestNum = numbers[0];
    let lowestNum = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > highestNum) {
            highestNum = numbers[i];
        }
        if (numbers[i] < lowestNum) {
            lowestNum = numbers[i];
        }
    }

    return highestNum + ' ' + lowestNum;
}


console.log(highAndLow("1 2 3"))