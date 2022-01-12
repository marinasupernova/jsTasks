

function getSuccessRate(statistic) {
    let total   = statistic.length;
    let success = 0;
    let result = 0;
  
    for (let i=0; i<total; i++ ){
      if (statistic[i] === '1'){
        success += 1;
      }
    }

    result = (success/total) * 100;
    console.log(success)
    console.log(total)
    console.log(result)
    return Math.round(result)
    
    
  }
  
  console.log(getSuccessRate(11100))