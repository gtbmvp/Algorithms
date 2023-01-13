// 2 for loops variation
const selectionSort = function (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        [array[j], array[i]] = [array[i], array[j]];
      }
    }
  }

  return array;
};

selectionSort([1, 5, 2, 33, 7, 9, 0, 5, 2, 4]);

//MIT for + while loops version
const selectionSort2 = function (array) {
  let suffixStart = 0;

  while (suffixStart !== array.length) {
    for (let i = suffixStart + 1; i < array.length; i++) {
      if (array[i] < array[suffixStart]) {
        [array[i], array[suffixStart]] = [array[suffixStart], array[i]];
      }
    }
    suffixStart++;
  }

  return array;
};

selectionSort2([1, 5, 2, 33, 7, 9, 0, 5, 2, 4]);

// MIT recursive version
const recurSelectionSort = function (array, i = null) {
  // helper function to find biggest element of array between 0 and i
  const prefixMax = (array, i) => {
    if (i > 0) {
      let j = prefixMax(array, i - 1); // j is max element between 0 and i - 1;
      if (array[i] < array[j]) return j; // compare i and j;
    }
    return i;
  };

  if (i === null) i = array.length - 1; // i is last element;
  if (i > 0) {
    j = prefixMax(array, i);
    [array[i], array[j]] = [array[j], array[i]];
    recurSelectionSort(array, i - 1);
  }
  return array;
};

recurSelectionSort([1, 5, 2, 33, 7, 9, 0, 5, 2, 4]);
