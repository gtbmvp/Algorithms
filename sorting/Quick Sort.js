function qSort(arr) {
  if (arr.length < 2) return arr;

  const pivot = arr[0];
  const lesser = [];
  const greater = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) lesser.push(arr[i]);
    else greater.push(arr[i]);
  }

  return [...qSort(lesser), pivot, ...qSort(greater)];
}

console.log(qSort([1, 22, 5, 7, 8]));
