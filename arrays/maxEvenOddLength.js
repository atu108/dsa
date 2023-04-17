function maxEvenOddLength(arr){
    let prevIsEven = isEven(arr[0])
    let maxLength = 1
    let currentLength = 1
    for(let i = 1; i < arr.length; i++){
        if( prevIsEven != isEven(arr[i])){
            currentLength++
        }else{
            maxLength = Math.max(maxLength, currentLength)
            currentLength = 1
        }
        prevIsEven = isEven(arr[i])
    }
    return Math.max(maxLength, currentLength);
}

function isEven(num){
    if(num < 0){
        return false
    }
    return num % 2 == 0;
}

console.log(maxEvenOddLength([2,2,1,2,1,2,2,2, 1]))