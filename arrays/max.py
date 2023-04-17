def max(arr):
    largest = 0
    for i in arr:
        if i > largest:
            largest = i
    return largest


print(max([]))
