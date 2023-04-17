def sieve(n):
    boolen_list = [True for element in range(n+1)]
    i = 2
    while i * i <= n:
        if boolen_list[i]:
            j = 2 * i
            while j <= n:
                boolen_list[j] = False
                j = j + i
        i = i + 1
    for k in range(2, n+1, 1):
        if (boolen_list[k]):
            print(k)


sieve(1111)
