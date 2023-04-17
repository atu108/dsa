function majority(arr){
    let miniumCountRequired = arr.length / 2;
    let seen = {};
    for(let i = 0; i < arr.length; i++){
        if(seen[arr[i]]){
            seen[arr[i]] = seen[arr[i]] + 1;
            if(seen[arr[i]]> miniumCountRequired){
                return i
            }
        }else{
            seen[arr[i]] = 1
        }
    }
    return -1
}

console.log(majority([8,3,4,8,8]))