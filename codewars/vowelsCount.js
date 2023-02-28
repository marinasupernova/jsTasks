function getCount(str) {
    let vowelCounter = 0;
    const vowels = ['a','o','u','e','i']

    for (let i = 0; i < str.length; i++){
        if (vowels.includes(str[i])) {
            vowelCounter += 1;

        }
    }
    return vowelCounter;
  }

  console.log(getCount("abracadabra"))