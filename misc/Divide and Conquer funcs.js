//Divide and Conquer functions

function sum(arr) {
    if (arr.length == 0) return 0;
  
    return arr[0] + sum(arr.slice(1));
  }
  
  function elementsCounter(arr) {
    if (arr.length == 0) return 0;
  
    return 1 + elementsCounter(arr.slice(1));
  }
  
  function max(arr) {
    if (arr.length == 2) return arr[0] > arr[1] ? arr[0] : arr[1];
  
    return arr[0] > max(arr.slice(1)) ? arr[0] : max(arr.slice(1));
  }
  
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
  
  console.log(sum([5, 7, 4, 1, 2, 2]));
  
  console.log(elementsCounter([1, 5, 6, 4, 1, 5, 6]));
  
  console.log(max([1, 22, 5, 7, 8]));
  
  console.log(qSort([1, 22, 5, 7, 8]));
  