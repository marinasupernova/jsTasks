function removeChar(str){
    let result = '';
    for (let i = 0; i < str.length -2; i++) {
         result += str[i+1]
    }

    return result;
   
   };

   console.log(removeChar('eloquent'))

   removeChar = str => str.slice(1,-1)