def printPrimeFactors(n):
    if n < 1:
        return
    while n % 2 == 0:
        print(2)
        n = n / 2
    while n % 3 == 0:
        print(3)
        n = n / 3
    i = 5
    while i * i <= n:
        while n % i == 0:
            print(i)
            n = n/i
        while n % (i+2) == 0:
            print(i+2)
            n = n/(i+2)
        i = i + 6
    if n > 3:
        print(n)


print(printPrimeFactors(1109))
