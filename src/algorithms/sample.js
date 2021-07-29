export function subsetSum(nums, sum) {
    const dp = [];
    const visitedNodesInOrder = [];
    sum = parseInt(sum);
    for (let i = 0; i < nums.length + 1; i++) {
        dp[i] = [];
        for (let j = 0; j < sum + 1; j++) {
            dp[i][j] = false;
            //visitedNodesInOrder.push(createNode(i, j, 0))
        }
    }
    
    for (let i = 0; i < dp.length; i++) {
        dp[i][0] = true;
        visitedNodesInOrder.push(createNode(i, 0, 1))
    }
    console.log("The sum is ")
    console.log(sum)
    for (let j = 0; j < sum + 1; j++) {
        dp[0][j] = false;
        visitedNodesInOrder.push(createNode(0, j, 0))
    }
    
    dp[0][0] = true
    visitedNodesInOrder.push(createNode(0, 0, 1))
    
    for (let i = 1; i <= nums.length; i++) {
        for (let j = 1; j <= sum; j++) {
            if(dp[i - 1][j] === true){
                dp[i][j] = true; 
                visitedNodesInOrder.push(createNode(i, j, 1))
            } 
            else if (dp[i - 1][j - nums[i]] === true) {
                dp[i][j] = true;
                visitedNodesInOrder.push(createNode(i, j, 1))
            }
            else {
                dp[i][j] = false;
                visitedNodesInOrder.push(createNode(i, j, 0))
            }
        }
    }
    return visitedNodesInOrder;
    

}

  
  const createNode = (row, col, status_in) => {
    return {
      row,
      col,
      status: status_in, 
  
    };
  };