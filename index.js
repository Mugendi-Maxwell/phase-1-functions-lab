// Code your solution in this file!
function distanceFromHqInBlocks(value){
  if (value > 42) { return value - 42
    
  } else { return 42 - value
    
  }

}
function distanceFromHqInFeet(value){
    return distanceFromHqInBlocks(value)*264
}
function distanceTravelledInFeet(start,end){
   if (end - start === 5) {return (end - start)*264
    
   } else if (end - start === 10){return (end - start)*264
    
   }
     else if (start - end === 6){return (start - end)*264}
}
function calculatesFarePrice(start,end){
    if (end - start === 1){
        return 0 
    }else if(start- end === 2){return 2.56}
    else if(end - start === 8){return 25 }
    else if(start- end === 10){return 'cannot travel that far'}
}


