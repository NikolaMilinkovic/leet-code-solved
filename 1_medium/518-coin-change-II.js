/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */

// https://algo.monster/liteproblems/518
function change (amount, coins) {
  let numsOfWays = Array(amount + 1).fill(0);
  numsOfWays[0] = 1;
  for(const coin of coins){
    for(let currAmount = coin; currAmount <= amount; ++currAmount){
      console.log(`> Logging num of ways before update: ${numsOfWays}`);
      numsOfWays[currAmount] += numsOfWays[currAmount - coin];
      console.log(`> Logging num of ways AFTER update: ${numsOfWays}`);
    }
  }

  return numsOfWays.pop();
};