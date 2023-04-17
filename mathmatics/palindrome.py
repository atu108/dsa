def palindrome(number):
    if number < 0:
        return False
    if number != reverseNumber(number):
        return False
    return True


def reverseNumber(number):
    if number < 10:
        return number
    reverse = 0
    temp = number
    while temp != 0:
        last_digit = temp % 10
        reverse = reverse * 10 + last_digit
        temp = temp // 10
    return reverse


print(palindrome(111111111111))
