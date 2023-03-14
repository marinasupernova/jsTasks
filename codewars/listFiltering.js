function filter_list(str) {
    let result = [];

    for (let i = 0; i < str.length; i++) {
        if (typeof str[i] !== 'string') {
            result.push(str[i])
        }
    }
    return result;

  }

console.log(filter_list([1,2,'a','b']))

function filter_list(l) {
    return l.filter(Number.isInteger);
  }