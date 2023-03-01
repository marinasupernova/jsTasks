function enough(cap, on, wait) {
    let possibleCap = cap - on;
    if (possibleCap >= wait) {
        return 0;
    }
    else {
        return ~(possibleCap - wait) + 1;
    }
  }
console.log(enough(20, 5, 5));
