// YANDEX
let arr = [1, 2, 3, 1, 2, 3, 4, 5, 6, 5, 6, 8, 7, 7, 8, 11, 11];

let result = arr
  .sort((a, b) => a - b)
  .findIndex((elem, index, arr) => {
    // если это первый элемент массива, то у него нету предыдущего, следовательно применяется условие || (или) и переходим во второе условие
    return (
      (index == 0 || arr[index] !== arr[index - 1]) &&
      // если это последний элемент массива, то у него нету следуюего, следовательно применяется условие || (или)
      (index == arr.length - 1 || arr[index] !== arr[index + 1])
    );
  });

console.log(`element ${arr[result]} at index: ${result}`);
