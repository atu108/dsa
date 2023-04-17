def maxDiff(arr):
    size = len(arr)
    current_min = arr[0]
    res = arr[1] - arr[0]
    i = 1
    while (i < size):
        if arr[i] - current_min > res:
            res = arr[i] - current_min
        if arr[i] < current_min:
            current_min = arr[i]
        i += 1
    return (current_min, res)


print(maxDiff([2, 1, 4, 5, 6, 10, 8, 2]))
