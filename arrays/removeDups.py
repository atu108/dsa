def removeDups(arr):
    seen = {arr[0]: 0}
    lastSeenIndex = 0
    for index, ele in enumerate(arr[1:]):
        if ele in seen:
            continue
        seen[ele] = index
        lastSeenIndex += 1
        arr[lastSeenIndex] = ele

    return [lastSeenIndex + 1, arr]


print(removeDups([5, 10, 10, 20, 20, 20, 20, 30, 30, 40, 40, 40]))
