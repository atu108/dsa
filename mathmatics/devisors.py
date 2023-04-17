def printDivisors(n):
    i = 1
    while i * i < n:
        if n % i == 0:
            print(i)
        i = i + 1
    while i >= 1:
        if n % i == 0:
            print(n//i)
        i = i - 1


printDivisors(100)
