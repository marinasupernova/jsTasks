function hero(bullets, dragons){
    if (bullets/dragons >= 2) {
        return true;
    }
    else {
        return false;
    }
    }

console.log(hero(100, 40))

function hero(bullets, dragons){
    //Get Coding!
    return (bullets / 2 >= dragons) ? true : false;
    }