const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// const totalBatteries = batteryBatches.reduce(function (accum) {
//     let total = 0;
//     for (let i=0; i< batteryBatches.length; i++) {
//     total += batteryBatches[i];
//     }
//     return total 
// })


const totalBatteries = batteryBatches.reduce((first, second ) => first + second)

totalBatteries();
    
