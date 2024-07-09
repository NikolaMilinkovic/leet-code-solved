const climbStairs = (steps) => {
    if(steps === 0) return 0;
    let num1 = 0;
    let num2 = 1;
    let nextNum;

    const uniqueWays = 0;
    for(let i = 1; i <= steps; i++){
      nextNum = num1 + num2;
      num1 = num2;
      num2 = nextNum;
    }

    return nextNum;
};