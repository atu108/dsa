def moveZeros(arr):
    count = 0
    length = len(arr)
    for i in range(length):
        if arr[i] != 0:
            temp = arr[count]
            arr[count] = arr[i]
            arr[i] = temp
            count += 1
    return arr


print(moveZeros([10, 0, 30, 30, 0, 0, 0, 40, 30, 10, 0]))
