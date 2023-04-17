def isSorted(arr):
    prev = arr[0]
    res = True
    for i in arr[1:]:
        if i < prev:
            res = False
            break
        prev = i
    return res


print(isSorted([999, 100, 110, 200]))
