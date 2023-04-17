a = [1, 2, 3, 4]
b = []
c = []


def moveToFinal(a, b, c):
    if len(a) == 0:
        return c
    if len(a) == 1:
        c.insert(0, a.pop(0))
        print("c", c)
        return moveToFinal(b, a, c)
    else:
        b.append(a.pop(0))
        print("b", b)
        return moveToFinal(a, b, c)


print(moveToFinal(a, b, c))
