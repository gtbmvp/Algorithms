// using Math.floor((low + high)/2) can lead to overflow (https://thebittheories.com/the-curious-case-of-binary-search-the-famous-bug-that-remained-undetected-for-20-years-973e89fc212)

// Pattern 1 - search for an element or condition which can be determined by accessing a single index in the array.
const binarySearch1_ver1 = function (nums, target) {
  if (nums == null || nums.length == 0) return -1;

  let low = 0,
    high = nums.length - 1,
    mid,
    guess;

  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    guess = nums[mid];

    if (guess === target) return mid;
    else if (guess > target) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
};

// Pattern 1 with recursion
const binarySearch1_ver2 = function (nums, target) {
  if (nums == null || nums.length == 0) return -1;

  let mid = Math.floor(nums.length / 2);

  if (nums[mid] === target) return mid;
  else if (nums.length <= 1) return -1;
  else if (nums[mid] < target) {
    let result = binarySearch1_ver2(nums.slice(mid + 1), target);
    if (result === -1) {
      return -1;
    } else {
      return mid + 1 + result;
    }
  } else {
    return binarySearch1_ver2(nums.slice(0, mid), target);
  }
};

// Pattern 2 - search for an element or condition which requires accessing the current index and its immediate right neighbor's index in the array
const binarySearch2 = function (nums, target, conditionFunc) {
  if (nums == null || nums.length == 0) return -1;

  let low = 0,
    high = nums.length,
    mid,
    guess;

  while (low < high) {
    mid = low + Math.floor((high - low) / 2);
    guess = conditionFunc(mid); // condition

    switch (guess) {
      case true:
        high = mid;
        break;
      case false:
        low = mid + 1;
        break;
    }
  }
  if (low != nums.length && nums[low] == target) return low;
  return -1;
};

// Pattern 3 - search for an element or condition which requires accessing the current index and its immediate left and right neighbor's index in the array
const binarySearch3 = function (nums, target, conditionFunc) {
  if (nums == null || nums.length == 0) return -1;

  let low = 0,
    high = nums.length - 1,
    mid,
    guess;

  while (low + 1 < high) {
    mid = low + Math.floor((high - low) / 2);
    guess = conditionFunc(mid); // condition

    switch (guess) {
      case true:
        high = mid;
        break;
      case false:
        low = mid;
        break;
    }
  }
  if (nums[low] == target) return low;
  if (nums[high] == target) return high;
  return -1;
};
