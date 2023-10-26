// https://leetcode.com/problems/two-sum/submissions/
var twoSum = function(nums, target) {
    var dict = new Map();
    for(var i = 0; i < nums.length; i++){
        var int = target - nums[i];
        if(dict.has(int)){
            return [dict.get(int), i]
        }else{
            dict.set(nums[i], i);
        }
    }
    return "No Target found" 
};