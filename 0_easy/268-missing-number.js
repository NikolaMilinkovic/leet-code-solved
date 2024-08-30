/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
    const num_len = nums.length;
    const num_set = new Set();
    for(let i = 0; i <= num_len; ++i){
      num_set.add(i);
    }

    nums.forEach(num => {
      num_set.delete(num);
    });

    const iterator = num_set.values();
    return iterator.next().value;
};

// Resenje 2 > dosta bolje, saberemo sve i oduzmemo i dobijemo ostatak / razliku izmedju ta dva niza sto znaci da je u pitanju nas missing number.
const missingNumber2 = (nums) => {
  let res = nums.length;

  for (let i=0; i<nums.length; i++) {
      res += (i - nums[i]);
  }
  return res;
};


// Bitovske operacije > Najefikasniji metod
const missingNumber3 = (nums) => {
    
  let res1 = 0;
  for(let i=0;i<nums.length;i++){
      res1 = res1 ^ nums[i];
  }
  let res2 = 0;
  for(let i=1;i<=nums.length;i++){
      res2 = res2 ^ i;
  }

  return res1 ^ res2;
};