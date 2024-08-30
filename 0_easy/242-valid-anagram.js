/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if(s.length !== t.length) return false;
  const frequencyMap = new Map();

  for(let i = 0; i < s.length; ++i){
      const char_S = s[i];
      const char_T = t[i];
      
      frequencyMap.set(char_S, (frequencyMap.get(char_S) || 0) + 1);
      frequencyMap.set(char_T, (frequencyMap.get(char_T) || 0) - 1);
  }

  for (const value of frequencyMap.values()) {
      if(value !== 0) return false;
  }

  return true;
};