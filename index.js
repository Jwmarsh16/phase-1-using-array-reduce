const batteryBatches = [4, 5, 3, 4, 4, 6, 5]

 let totalBatteries = batteryBatches.reduce(function (accumulator, element) {
   return element + accumulator;
},0)



 
/*
 1) should have a `totalBatteries` variable
      2) should have a number as a result
      3) should have made the sum of all the assembled batteries
*/