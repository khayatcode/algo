// Notes to the LeetCode problem:
// https://leetcode.com/problems/two-sum/description/

function twoSum(nums, target){
    var numHash = new Map();
    for(var i = 0; i < nums.length; i++){
        const complement = target - nums[i];
        if(numHash.has(complement)){
            return [numHash.get(complement), i];
        }
        numHash.set(nums[i], i);
    }
    return "No Two sum found"
};

