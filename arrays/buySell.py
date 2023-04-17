def buySell(arr):
    profit = 0
    prev = arr[0]
    for ele in arr[0:]:
        if ele > prev:
            profit += ele - prev
        prev = ele
    return profit


print(buySell([1, 5, 3, 8, 12]))
profit = 4
