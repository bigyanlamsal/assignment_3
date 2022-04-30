function ShortestPath ( n, m, [a, b, c, d] ) {
    //Waiting for elevator case:
    var waitingElevator = a * (Math.abs(m - n) + b + c + n*a + b);
  
    //walking to elevator:
    var walkingTo = Math.abs(m - n)*d + b + c + m*a + b;
  
    //walking to elevator:
    var walkingOnly = n*d;
  
    var shortestTime = Math.min(waitingElevator, walkingTo, walkingOnly);
    var shortestWay = "";
  
    if(shortestTime === waitingElevator){
      shortestWay = shortestWay + "It would be best to wait for the elevator."
    }
  
    if(shortestTime === walkingTo){
      shortestWay = shortestWay + "It would be best to walk to the elevator."
    }
  
    if(shortestTime === walkingOnly){
      shortestWay = shortestWay + "It would be best to walk and not use the elevator at all."
    }
  
    console.log(${shortestTime} Seconds. ${shortestWay});
  }
  
  ShortestPath(4, 3, [2,3,4,5]);