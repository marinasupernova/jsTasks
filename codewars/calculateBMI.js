function bmi(weight, height) {
    let bmi = weight/(height** 2);
    console.log(bmi)

    if (bmi <= 18.5) {
        return 'Underweight'
    }
    if (bmi <= 25) {
        return 'Normal'
    }
    if (bmi <= 30){
        return 'Overweight'
    }
    else {
        return 'Obese'
    }
  }
console.log(bmi(80, 1.90))