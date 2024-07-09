const singleNumber = (nums) => {
  let result = 0;
  nums.forEach((num) => {
      result ^= num;
  })
  return result;
};

// XOR ^=
// This will match all the numbers, when numbers have a match / are a pair they cancel eachother out.
// Number without the pair is returned, therefore result = num without the pair.