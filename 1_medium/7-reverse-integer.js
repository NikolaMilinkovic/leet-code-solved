/**
 * @param {number} x
 * @return {number}
 */

const upper = 2147483647;
const lower = -2147483648;

var reverse = function(x) {
  let trackArr = x.toString().split('');
  if(trackArr[0] !== '-'){
    trackArr.reverse();
  } else {
    trackArr.reverse();
    const operator = trackArr.pop();
    trackArr=[operator, ...trackArr];
  }

  if(Number(trackArr.join('')) < upper && Number(trackArr.join('')) > lower){
    return Number(trackArr.join(''));
  } else {
    return 0;
  }
};