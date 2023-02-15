function betterThanAverage(classPoints, yourPoints) {
    let totalSum = 0;

    for ( i = 0; i < classPoints.length; i++ ) {
        totalSum += classPoints[i]
        console.log(totalSum)
    }
    const averageScore = totalSum / classPoints.length;
    if (averageScore < yourPoints) {
        return true
    } else {
        return false
    }
    
  }

  console.log(betterThanAverage([2, 3], 5))