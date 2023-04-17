function ePoint(arr){
    let sum = arrSum(arr);
    let leftSum = 0;
    let hasEq = false; 
    for(let i = 0; i < arr.length; i++){
        sum = sum - arr[i];
        if(leftSum == sum){
            hasEq = true;
            console.log(i)
            break;
        }
        leftSum = leftSum + arr[i];
    }
    return hasEq;

}

function arrSum(arr){
    return arr.reduce((a,b)=>a+b)
}


console.log(ePoint([3,4,8,-9,1,6]))