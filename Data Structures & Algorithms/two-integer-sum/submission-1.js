class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

       const seen = new Map(); // value -> index

  for (let j = 0; j < nums.length; j++) {
    const complement = target - nums[j];
    if (seen.has(complement)) {
      return [seen.get(complement), j];
    }
    seen.set(nums[j], j);
  }
    }
}
