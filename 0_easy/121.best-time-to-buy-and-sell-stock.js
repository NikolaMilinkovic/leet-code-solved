// RADI ali nije dovoljno performantno...
const maxProfit = (prices) => {
  let lowestPrice;
  let maxProfit = 0;
  while(prices){
      lowestPrice = prices.splice(0, 1);
      if(prices.length === 0) break;
      for(let i = 0; i < prices.length; i++){
          if((prices[i] - lowestPrice) > maxProfit){
              maxProfit = prices[i] - lowestPrice;
          } 
      }
  }

  return maxProfit;
};

// Take 2
const maxProfit2 = (prices) => {
  let maxProfit = 0;
  let buyPrice = prices[0];

  for(let i = 1; i < prices.length; i++){
      if(prices[i - 1] < buyPrice) buyPrice = prices[i - 1];
      if(prices[i] - buyPrice > maxProfit){
          maxProfit = prices[i] - buyPrice;
      }
  }

  return maxProfit;
};