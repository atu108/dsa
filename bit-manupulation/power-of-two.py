table = [None]*256

table[0] = 0


def countBitsIn255():
    i = 1
    while i <= 255:
        table[i] = table[i & (i-1)] + 1
        i = i+1


def powerOfTwo(n):
    digits = table[n & 255] + table[(n >> 8) & 255] + \
        table[(n >> 16) & 255] + table[(n >> 24) & 255]
    print(digits)
    if digits == 1:
        return True
    return False


def powerOfTwoEfficient(n):
    return n and (n & (n-1) == 0)


countBitsIn255()
n = 15
print(powerOfTwo(n))
print(powerOfTwoEfficient(n))
