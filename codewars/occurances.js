function strCount(str, letter){  
    let counter = 0;

    if (str === ''){
        return 0;
    }

    for (let i =0; i < str.length; i++) {
        if (str[i] === letter) {
            counter += 1;
        }
    }
    return counter;
  }

  console.log(strCount('Hello', 'z'))