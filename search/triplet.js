let {findSumPair} = require('./twoPointer');

exports.triplet = (arr, sum) => {
    for(let i = 0; i < arr.length - 2; i++){
        if(findSumPair(arr.slice(arr[i, arr.length]), sum - arr[i])){
            return true;
        }
    }
    return false;
}

console.log(exports.triplet([2,3,4,5,6,7,8,9,10,20,30], 31))