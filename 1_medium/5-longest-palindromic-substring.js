/**
 * @param {string} s
 * @return {string}
 */

// OVO NE RADI, PROBAJ OPET, AKO NE USPES POGLEDAJ RESENJE.
// Kod palindroma imas tipa boob i racecar koji krecu iz centra!
// Ovo sa centrom je najlakse, samo left-- i right++ od centra, i sve dok nisu isti -- / ++
// Cim nisu isti return rec.slice(left + 1 <= ???? zasto ovde ide + 1 ?, right);
// Ovo drugo, srecno :)
const longestPalindrome = (string) => {
  let charArr = string.split('');
  let longestPalindrome = '';

  for(let i = 0; i <= charArr.length; ++i){
    let palindrome = '';
    let left = charArr.slice(0, i);
    let right = charArr.slice(i, charArr.length);

    for(let j = 0, k = 0; j <= left.length, k <= right.length; ++j, ++k){
      if(left[j] === undefined || right[k] === undefined) continue;

      if(left[j] === right[k]){
          console.log(`Match found for ${left[j]} & ${right[k]}`);
          palindrome = left[j] + palindrome + right[k];

          if(palindrome.length > longestPalindrome.length){
            longestPalindrome = palindrome;
            console.log('New longest palindrome found > ' + longestPalindrome);
          }
      }
    }
  }
  console.log('Longest palindrome is: ' + longestPalindrome);
};

// longestPalindrome('noboobs');
longestPalindrome('noboobsasduuuuuudas');
// longestPalindrome('bb');


function longestPalindrome(string){
  let longest = '';
  let str = string;

  function walk(left, right){
      while(left >= 0 && right < str.length && str[left] === str[right]){
          left--;
          right++;
      }
      return str.slice(left + 1, right);
  }
  
  for(let i = 0; i < str.length; i++){
      let evenPal, oddPal;
          evenPal = walk(i, i + 1);
          oddPal = walk(i, i);

      if(evenPal.length > longest.length)
          longest = evenPal;
      if(oddPal.length > longest.length)
          longest = oddPal;
  }

  return longest;
};