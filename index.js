// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    if (blocks >= 42) {
      return blocks - 42;
    } else {
      return 42 - blocks;
    }
  }
  
  
  function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264; 
  }
  
  function distanceTravelledInFeet(startBlock, endBlock) {
    let blocksTravelled = Math.abs(startBlock - endBlock);
    return blocksTravelled * 264; 
  }
  
  function calculatesFarePrice(startBlock, endBlock) {
    let distance = distanceTravelledInFeet(startBlock, endBlock);
    if (distance <= 400) {
      return 0;
    } else if (distance <= 2000) {
      return (distance - 400) * 0.02; 
    } else if (distance <= 2500) {
      return 25; 
     
    }
    else if(distance >2500){
        return 'cannot travel that far'
    }
  }