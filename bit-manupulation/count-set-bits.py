def countSetBits(n):
    i = 0
    count = 0
    while n > 0:
        if n & 1:
            count = count + 1
        n = n >> 1
    return count


n = 1
print(countSetBits(n))
