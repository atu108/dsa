def power(x, n):
    res = 1
    while n > 0:
        if n % 2 != 0:
            print(1)
        else:
            print(0)
        n = n//2


power(0, 15)
