function maxSumSubArr(arr){
    let res = arr[0];
    let maxPrevSum = arr[0];
    for(let i = 1; i < arr.length; i++){
        maxPrevSum = Math.max(maxPrevSum + arr[i], arr[i]);
        if(res < maxPrevSum){
            res = maxPrevSum;
        }
    }
    return res;
}
    
   


console.log(maxSumSubArr([2, 3, -8, 7, -1, 2, 3]))
