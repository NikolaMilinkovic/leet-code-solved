const plusOne = (digits) => {
  const reversedArr = digits.reverse()
  for(let i = 0; i < reversedArr.length; i++){
      if(reversedArr[i] < 9){
          reversedArr[i]++
          return reversedArr.reverse();
      } else {
          reversedArr[i] = 0;
      }
  }

  reversedArr.push(1);
  return reversedArr.reverse();
};

const plusOne2 = (digits) => {
  return (BigInt(digits.join('')) + 1n).toString().split('');
}

