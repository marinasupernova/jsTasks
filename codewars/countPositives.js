function countPositivesSumNegatives(input) {
    let positivesCounter = 0;
    let negativesSum = 0;
    if (!input) {
        return [0, 0]
    }
    for (let i = 0; i < input.length; i++ ) {
        if (input[i] < 0) {
            negativesSum += input[i];
        }
        else {
            if (input[i] === 0) {
                continue;
            }
            positivesCounter += 1;
        }
    }
    return [positivesCounter, negativesSum ]
  }


console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, -11, -12, -13, -14, -15]))