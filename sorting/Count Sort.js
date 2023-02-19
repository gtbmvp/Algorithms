function countSort(arr) {
  let min = arr[0];
  let max = arr[1];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }

  let k = max - min + 1;
  let indexArr = new Array(k).fill(0);

  for (let elem of arr) {
    indexArr[elem - min] += 1;
  }

  let count = 0;
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < indexArr[i]; j++) {
      arr[count] = i + min;
      count++;
    }
  }

  return arr;
}
