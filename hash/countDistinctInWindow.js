function countDistictInWindow(arr, k) {
  const frequency = {};
  for (let i = 0; i < k; i++) {
    if (!frequency[arr[i]]) frequency[arr[i]] = 1;
    else frequency[arr[i]]++;
  }
  console.log(Object.keys(frequency).length);
  for (let i = k; i < arr.length; i++) {
    if (--frequency[arr[i - k]] == 0) delete frequency[arr[i - k]];
    if (!frequency[arr[i]]) frequency[arr[i]] = 1;
    else frequency[arr[i]]++;
    console.log(Object.keys(frequency).length);
  }
}

const arr = [10, 20, 10, 20, 30, 40, 40, 50];
countDistictInWindow(arr, 4);
