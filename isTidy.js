function isTidy(number) {

    let result = false;
    if(number <= 9){
        return true
      }
  
    let numstr = String(number);
      
    let arr = numstr.split('')

    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i]<=arr[i+1]){
            console.log(arr[i], arr[i+1], arr[i]<=arr[i+1]);
            result = true
        }
        else{
            console.log(arr[i], arr[i+1]);
            result = false
        }
    }
    return result
  }

  console.log(isTidy(13479))