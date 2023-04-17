function hasSum(arr, sum){
    let hasSum = false
    let currentSum = 0
    let start = 0
    for(let i = 0; i < arr.length; i++){
        currentSum = currentSum + arr[i]
        while(currentSum > sum){
            currentSum = currentSum - arr[start]
            start++
        } 
        if(currentSum == sum){
            hasSum = true
            break;  
        }
    }
    return hasSum
}

console.log(hasSum([1,4,20,3,10,5], 33))