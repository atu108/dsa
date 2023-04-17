def leftRotateByD(arr, d=2):
    size = len(arr)
    while d > 0:
        curr = arr[0]
        for i in range(1, size):
            arr[i-1] = arr[i]
        arr[size - 1] = curr
        d -= 1
    return arr


print(leftRotateByD([2, 3, 4, 5, 5, 6], 2))
