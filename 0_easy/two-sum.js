// Status: Solved

// Brute Force solution
// 2x loops O(n^2)
// Run Time: 104ms
const twoSum = (nums, target) => {
  for(let i = 0; i<nums.length; i++){
    for(let j = i + 1; j<nums.length; j++){
      if(nums[i] + nums[j] === target){
        return [i, j];
      }
    }
  }
};


// Storage solution with one loop
// Run Time: 54ms
const twoSumStorage = (nums, target) => {
  let storage = {};
  let index;
  let num;
  for(let i = 0; i < nums.length; i++){
    index = i;
    num = nums[i];
    // Target - num stavljamo u storage => To je broj koji trazimo npr:
    // 9 - 2 = 7
    // Znaci da stavljamo u storage broj 7 sa njegovim indeksom '7':0
    // Ukoliko u storage postoji kljuc num, npr '7' vracamo index tog broja i index trenutnog broja.
    if(storage[num] !== undefined) return [storage[num], index];
    storage[target-num] = index;
  }
}


// Map solution
// Isto kao Storage solution samo koristi Map()
// Run Time: 60ms
const twoSumMap = (nums, target) => {
  const map = new Map();
  let num, diff;

  for(let i = 0; i< nums.length; i++){
    num = nums[i];
    diff = target - num;
    if(map.has(diff)){
      return [i, map.get(diff)];
    }

    map.set(num, i);
  }
}

