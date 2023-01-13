function bubbleSort(array) {
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        [array[i - 1], array[i]] = [array[i], array[i - 1]];
        sorted = false;
      }
    }
  }

  return array;
}
