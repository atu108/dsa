def freq(arr):
    ele_freq = {}
    for i in arr:
        if i in ele_freq:
            ele_freq[i] += 1
        else:
            ele_freq[i] = 1
    return ele_freq


print(freq([10, 10, 10, 20, 30, 30, 20]))
