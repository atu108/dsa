function binarySearch(arr, ele){
    let start = 0;
    let end = arr.length - 1;

    while(start <= end){
        let mid = Math.floor((start + end) / 2)
        if(arr[mid] == ele) return mid;
        if(arr[mid] < ele){
            start = mid + 1;
        }
        if(arr[mid] > ele){
            end = mid - 1;
        }
    }
    return -1;
}
console.log(binarySearch([10,20,30,40,60,76], 20))