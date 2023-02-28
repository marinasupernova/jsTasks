function lovefunc(flower1, flower2){
    let petalSum = flower1 + flower2;
    if (petalSum % 2 === 0) {
        return false;
    } else {
        return true;
    }
  }
console.log(lovefunc(1,4))