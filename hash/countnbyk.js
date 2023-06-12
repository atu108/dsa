function countNByK(arr, k) {
  const freq = arr.length / k;
  const frequencyMap = {};
  for (let i = 0; i < arr.length; i++) {
    if (!frequencyMap[arr[i]]) frequencyMap[arr[i]] = 1;
    else frequencyMap[arr[i]]++;
  }

  for (let prop in frequencyMap) {
    if (frequencyMap[prop] > freq) {
      console.log(prop);
    }
  }
}

const arr = [30, 10, 20, 20, 10, 20, 30, 30];

countNByK(arr, 4);
