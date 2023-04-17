function findSumByKdence(arr){
    let max = arr[0]
    let maxEnding = arr[0]
    for(let i = 1; i < arr.length; i++){
       maxEnding = Math.max(maxEnding + arr[i], arr[i])
       max = Math.max(maxEnding, max)
    }
    return max
}

function findMaxCircularSum(arr){
    let normalMaxSum = findSumByKdence(arr);
    console.log(normalMaxSum)
    if(normalMaxSum < 0){
       return normalMaxSum
    }
    let normalArraySum = 0;
    for(let i = 0; i< arr.length; i++){
        normalArraySum += arr[i];
        arr[i] = arr[i] * -1
    }
    let sumOfModifiedArray = findSumByKdence(arr)
    return Math.max(normalArraySum,normalArraySum + sumOfModifiedArray)
}

console.log(findMaxCircularSum([8,-4,3,-5,4]))