exports.findSumPair = function(arr, sum){
    let i =0;
    let j = arr.length - 1;
    while(i<j){
        if(arr[i] + arr[j] == sum){
            return true;
        }
        if(arr[i] + arr[j] > sum){
            j--
        }else{
            i++
        }
    }
    return false
}