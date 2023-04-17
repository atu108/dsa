function minFlips(arr){
    let group1 = arr[0]
    let foundGroup2 = false
    for(let i = 1; i < arr.length; i++){
        if(!foundGroup2 && arr[i] != group1){
            console.log("from: ", i)
            foundGroup2 = true
        }
        if((foundGroup2 && arr[i] == group1) || (i == arr.length - 1) ){
            console.log("two: ", i - 1)
            foundGroup2 = false
        }
        
    }
}

console.log(minFlips([1,1,1,1,1,1,0,0,0,0,0,1, 0,0]))