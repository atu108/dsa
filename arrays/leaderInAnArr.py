def leaderInArr(arr):
    leaders = []
    array_size = len(arr)
    current_leader = arr[array_size - 1]
    leaders.append(current_leader)
    start = array_size - 2
    while (start >= 0):
        if arr[start] > current_leader:
            current_leader = arr[start]
            leaders.append(current_leader)
        start -= 1
    return leaders


print(leaderInArr([100, 90, 80, 60, 40, 5, 1000, 40]))
