var humanYearsCatYearsDogYears = function(humanYears) {
    let result = [];

    if (humanYears=== 0) {
        return [0, 0, 0];

    }
    
    if (humanYears=== 1) {
        result.push(humanYears);
        result.push(15);
        result.push(15);
        return result;
    }

    if (humanYears=== 2) {
        result.push(humanYears);
        result.push(24);
        result.push(24);
        return result;
    }

    let catYears = ((humanYears-2)*4) + (15+9);
    let dogYears = ((humanYears-2)*5) + (15+9);

    result.push(humanYears);
    result.push(catYears);
    result.push(dogYears);

    return result; 
  }

  console.log(humanYearsCatYearsDogYears(1))