function sortByLength (array) {
    let result = []


    for (let i = 0; i < array.length-1; i++) {
        if (array[i].length > array[i+1].length) {
            result.push(array[i])
        }
        else {
            result.push(array[i+1])
        }
    }
  };

  console.log(sortByLength(["Beg", "Life", "I", "To"]))