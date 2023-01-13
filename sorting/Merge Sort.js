// MIT version
const merge = (left, right) => {
  const result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }
  return result;
};

const mergeSort = (array) => {
  if (array.length < 2) return array;
  else {
    let middle = Math.floor(array.length / 2),
      leftSorted = mergeSort(array.slice(0, middle)),
      rightSorted = mergeSort(array.slice(middle));

    return merge(leftSorted, rightSorted);
  }
};

console.log(mergeSort([5, 6, 4, 8, 7, 3, 1, 2]));

// Shorter version
const merge2 = (left, right) => {
  const result = [];

  // keep doing until one of the subarrays becomes empty
  while (left.length && right.length) {
    if (left[0] < right[0]) result.push(left.shift());
    else result.push(right.shift());
  }

  return [...result, ...left, ...right]; //spread leftover elements of the non-empty left or right subarray
};

const mergeSort2 = (array) => {
  if (array.length < 2) return array;

  const half = Math.floor(array.length / 2),
    left = array.splice(0, half); //splice deletes from 0 to half and returns it -> left half; meanwhile it also changes initial array making it leftover elements right half;

  return merge2(mergeSort2(left), mergeSort2(array));
};

console.log(mergeSort2([5, 6, 4, 8, 7, 3, 1, 2]));
