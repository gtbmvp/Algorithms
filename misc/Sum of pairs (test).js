function sumPairs(nums, sum) {
  let seen = new Set();

  for (let num of nums) {
    let diff = sum - num;

    if (seen.has(diff)) return [diff, num];
    else seen.add(num);
  }
}

// function sumPairs(ints, s) {
//   let result = [],
//     border = ints.length;

//   for (let i = 0; i < border; i++) {
//     for (let j = i + 1; j < border; j++) {
//       if (ints[i] + ints[j] == s) {
//         border = j;
//         result = [ints[i], ints[j]];
//         break;
//       }
//     }
//   }
//   if (result.length == 0) return undefined;

//   return result;
// }

// With binary search try
// function sumPairs(ints, s) {
//   let array = ints.sort((a, b) => a - b),
//     result = [],
//     high = ints.length - 1,
//     border = ints.length;

//   for (let i = 0; i < border; i++) {
//     let low = i + 1;
//     while (low <= high) {
//       let mid = low + Math.floor((high - low) / 2);

//       if (array[i] + array[mid] == s) {
//         border = mid;
//         result.push(array[i], array[mid]);
//         break;
//       } else if (array[i] + array[mid] > s) {
//         high = mid - 1;
//       } else low = mid + 1;
//     }
//   }
//   return result.slice(-2) || undefined;
// }

console.log(sumPairs([0, 1, 7, 5], 1));
console.log(sumPairs([11, 3, 7, 5], 10));
console.log(sumPairs([4, 3, 2, 3, 4], 6));
console.log(sumPairs([0, 0, -2, 3], 2));
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6));
