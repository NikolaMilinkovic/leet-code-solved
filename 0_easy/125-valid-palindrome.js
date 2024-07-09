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