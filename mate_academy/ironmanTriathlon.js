const triathlon = {
    "run": 42.2,
    "bike": 180.25,
    "swim": 3.86,
  };


function getTriathlonDistance(distance) {
    const currentPoint = {};
    if (distance === 0) {
        return "Starting Line... Good Luck!"
    }
    if (distance > 0 && distance < 3.86 ) {
        currentPoint = {"swim": 3.86 - distance}

    }
    if (distance >= 184.11 && distance < 226.31) {


    }
    if (distance >= 226.31 ) {
        return "You\'re done! Stop running!"
        
    }
    
    for (let discipline in triathlon) {
        if 
    }
  }



  console.log(getTriathlonDistance(0))
