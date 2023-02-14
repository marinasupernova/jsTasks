function getGrade (s1, s2, s3) {
    let averageScore = (s1 + s2 + s3) / 3
    if (averageScore > 90) {
        return 'A'
    }
    if (averageScore > 80){
        return 'B'
    }
    if (averageScore > 70){
        return 'C'
    }
    if (averageScore > 60){
        return 'D'
    }
    return 'F'
    }

console.log(getGrade(90,67,80))