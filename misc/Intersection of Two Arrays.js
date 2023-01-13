const intersection = function (nums1, nums2) {
  let set = new Set([...nums1, ...nums2]),
    result = [];

  for (let item of set.values()) {
    if (nums1.includes(item) && nums2.includes(item)) {
      result.push(item);
    }
  }

  return result;
};

console.log(
  intersection([4, 4, 5, 5, 7, 3, -1, 9, 5, 8], [-1, 9, 4, 9, 8, 4, 3])
);
