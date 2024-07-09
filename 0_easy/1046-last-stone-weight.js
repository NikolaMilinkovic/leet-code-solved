const lastStoneWeight = (stones) => {

  // If last stone, return it
  if(stones.length === 1){
      return stones[0];
  }

  // Sort all the stones
  stones.sort((a, b) => a - b);

  // If last 2 stones, calc and return
  if(stones.length === 2){
      return Math.abs(stones[0] - stones[1]);
  }

  // Get largest stones
  let heaviest = stones.splice(stones.length - 2, stones.length);
  let newStone = 0;

  // If they are the same, destroy them
  if(heaviest[1] === heaviest[0]){
      newStone = 0;
  } else {
      newStone = heaviest[1] - heaviest[0]
  }

  // If new stone found, push it and call recursive
  if(newStone !== 0){
      stones.push(newStone);
      return lastStoneWeight(stones);
  }

  // Call recursive without the new stone
  return lastStoneWeight(stones);
};