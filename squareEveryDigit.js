function squareDigits(num){
    let result = ''; 
    let squared = 0;


    let convNum = num.toString();

    for (let i = 0; i < convNum.length; i++ ) {
        squared = convNum[i] ** 2;
        result += squared.toString();

    }

    return Number(result);
  }

console.log(squareDigits(3212))