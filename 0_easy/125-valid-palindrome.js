const isPalindrome = (string) => {
  const regex = /^[a-zA-Z0-9]+$/;
  let tempArr = string.toLowerCase().split('');
  let processedString = [];
  let reversedString;
  tempArr.forEach((letter) => {
      const valid = letter.match(regex);
      if(valid && valid[0]) processedString.push(valid[0]);
  })

  reversedString = [...processedString].reverse().join('');
  processedString = processedString.join('');

  if(processedString === reversedString) return true;
  return false;
};

// Less verbose version / Lower performance for some reason on LeetCode
// But overall should be more performant than previous method
const isPalindrome2 = (string) => {
  const cleanedStr = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanedStr === cleanedStr.split('').reverse().join('');
};