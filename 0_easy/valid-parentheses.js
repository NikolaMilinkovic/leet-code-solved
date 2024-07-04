// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.


// Prodji kroz string, store u array sve otvorene zagrade.
// Kad naletim na zatvorenu zagradu pogledaj poslednju zagradu u array-u
// Ako nije isti tip zagrada onda je input netacan
// Ako jeste izbaci zagradu iz array-a i counter ++
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if(s.length <1 || s.length >104) return console.log('FALSE');

  const openParentheses = ['(','{','['];
  const closedParentheses = [')','}',']'];
  let currentlyOpened = [];
  const string = s;
  let numOfCompleteBrackets = 0;

  // Go through the whole string
  for(let i = 0; i < string.length; i++){

    // Case of OPEN PARENTHESES
    if(openParentheses.includes(string.charAt(i))){
      currentlyOpened.push(string.charAt(i));

    // Case of CLOSED PARENTHESES
    } else if(closedParentheses.includes(string.charAt(i))){
      const openPar = currentlyOpened.slice(-1);
      
      if(
        string.charAt(i) === ')' && openPar[0] === '(' ||
        string.charAt(i) === '}' && openPar[0] === '{' ||
        string.charAt(i) === ']' && openPar[0] === '['
      ){
        currentlyOpened.pop();
        numOfCompleteBrackets++;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  // Return value based on currentlyOpened parentheses
  if(currentlyOpened.length === 0) return true;
  return false;
};



// ===================== [ SOME BETTER SOLUTIONS ] =====================
var isValid = function (s) {
  let stack = [];
  let map = {
      '(': ')',
      '{': '}',
      '[': ']'
  };
  let len = s.length;
  for (let i = 0; i < len; i++) {
      if (stack.length > 0 && map[stack[stack.length - 1]] === s[i]) {
          stack.pop();
      } else {
          stack.push(s[i]);
      }
  }
  return stack.length === 0;
};


var isValid = function(s) {
  const stack = []
  for(let i=0; i<s.length; i++){
      if(s[i]==='('){
          stack.push(')')
      } else if(s[i]==='['){
          stack.push(']')
      }else if(s[i]==='{'){
          stack.push('}')
      }else if(!stack.length || stack.pop()!==s[i]){
          return false
      }
  }
  return !stack.length
};