/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let usedCharacters = [];
  let strArr = [];
  let longest = 0;
  for(let i = 0; i < s.length; i++){
    if(!strArr.includes(s.charAt(i) || !usedCharacters.includes(s.charAt(i)))){
      strArr.push(s.charAt(i));
      usedCharacters.push(s.charAt(i));
      if(strArr.length > longest){
        longest = strArr.length;
      }
    } else {
      while (strArr[0] !== s.charAt(i)) {
        usedCharacters.push(strArr.shift());
      }
      strArr.shift();
      strArr.push(s.charAt(i));
    }
  }
  return longest;
};