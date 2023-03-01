function greet (name, owner) {
    if (name != owner) {
        return 'Hello guest';
    } else {
        return 'Hello boss';
    }

    
    // for (let i = 0 ; i < name.length; i++){
    //     for (let j = 0; j < owner.length; j++) {
    //         if (name[i]=== owner[j] && name[i-1] === owner[j-1]){
    //             return "Hello boss"
    //         }
    //         else {
    //             return "Hello guest"
    //         }

    //     }
    // }
  }

console.log(greet('Daniel', 'Daniel'))
console.log(greet('Greg', 'Daniel'))
