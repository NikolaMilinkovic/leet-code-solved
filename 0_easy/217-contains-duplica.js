/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const dataSet = new Set();

  for(let i = 0; i < nums.length; i++){
    if(dataSet.has(nums[i])) return true;
    dataSet.add(nums[i]);
  }

  return false;
};