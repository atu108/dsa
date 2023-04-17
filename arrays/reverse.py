def reverse(arr):
    low = 0
    high = len(arr) - 1
    while low < high:
        temp = arr[low]
        arr[low] = arr[high]
        arr[high] = temp
        low += 1
        high -= 1
    return arr


print(reverse([2, 3, 4, 4, 5, 6]))
