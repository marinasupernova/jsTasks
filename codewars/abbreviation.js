function abbrevName(name){

   let firstL = name[0];
   let lastL = '';
   
   for ( let i = 0; i < name.length; i++ ) {
      if (name[i] === ' ') {
        lastL += name[i+1];
      };

   }
    let result= firstL + '.' + lastL;
    return result.toUpperCase()

}

console.log(abbrevName('Sam Harris'))

function abbrevName(name){

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }