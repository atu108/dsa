def maxOnes(arr):
    max_count = 0
    current_max = 0
    for ele in arr:
        if ele == 1:
            current_max += 1
            continue
        max_count = max(current_max, max_count)
        current_max = 0
    return max(current_max, max_count)


print(maxOnes([1, 1, 2,  1, 2, 1, 1]))
