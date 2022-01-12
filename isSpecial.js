function isSpecialNumber(n) {

    let result = 0;

    if(n <= 5){
        return 'Special!!'
    }


    let numstr = String(n);
    
    let arr1 = numstr.split('')
    console.log(arr1)

    for (let i =0; i<arr1.length; i++){
        if (arr1[i] <= 5 && arr1[i +1] <= 5 ){
            return 'Special!!'
        }  
        else {
            return 'NOT!!'
          }
        }
  

    
  
  }

console.log(isSpecialNumber(9))