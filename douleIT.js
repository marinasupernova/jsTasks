function doubleChars(message) {
    let result = '';

    for (let i=0; i < message.length; i++){
        result += message[i]+ message[i];
    }
  
   return result
}

console.log(doubleChars('Super'))