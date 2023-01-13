const mySqrt = function (x) {
  let low = 0;
  let high = x;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (mid * mid === x) return mid;

    if (mid * mid > x) high = mid - 1;
    else low = mid + 1;
  }
  return low - 1;
};
