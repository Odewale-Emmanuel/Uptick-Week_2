// 2. Pair Sum Problem
// Given
// an array of integers and a target sum, find two numbers in the array
// that add up to the target sum. You may not use the same element twice.Example 1:Input:nums = [2, 7, 11, 15]target = 9Output:[0, 1] (because 2 + 7 = 9 and their corresponding indices in the array are 0 and 1)Explanation:The numbers 2 (at index 0) and 7 (at index 1) add up to the target sum 9.Example 2:Input:nums = [3,2, 4]target = 6Output:[1, 2] (because 2 + 4 = 6 and their corresponding indices in the array are 1 and 2)Note:The
// Two Sum algorithm typically assumes that there is only one unique pair
// of numbers that add up to the target sum within the given array.

function findTwoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const currentSum = nums[i] + nums[j];
      if (currentSum === target) {
        return [i, j];
      }
      continue;
    }
  }
}

console.log(findTwoSum([2, 5, 4, 7, 11, 15], 9));
