class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

         const numSet = new Set(nums);
    let longest = 0;

    for (const num of numSet) {
        if (!numSet.has(num - 1)) {
            let current = num;
            let streak = 1;

            while (numSet.has(current + 1)) {
                current++;
                streak++;
            }

            longest = Math.max(longest, streak);
        }
    }

    return longest;


    }
}
