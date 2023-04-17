def factorial(number):
    if number == 0 or number == 1:
        return 1
    factorial = number
    for i in range(1, number):
        factorial = factorial * i
    return factorial


print(factorial(125))


def countTrailingZeros(number):
    count = 0
    i = 5
    while i <= number:
        count = count + number//i
        i = i * 5
    return count


print(countTrailingZeros(125))
