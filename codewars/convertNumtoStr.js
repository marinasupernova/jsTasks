function numberToString(num) {
    // return num.toString();
    // return String(num);
    // return num.toString().split('').join(',')
    num = num.toString().split('')
    let result = '';

    for (let i=0; i < num.length; i++){
        result += num[i];
    }

    return result;
    
  }

  console.log(numberToString(123))