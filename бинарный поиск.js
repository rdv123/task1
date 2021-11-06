let target = 77;
let nums = [3, 77, 53, 5, 79, 9, 6, 34, 48, 98, 8, 7].sort((a, b) => a - b);
console.log(nums);
let couter = 0;
let search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left <= right) {
    couter++;
    mid = Math.round((right - left) / 2) + left;
    if (target === nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};

console.log(search(nums, target));
console.log(couter);
