export function subsetSum(nums, sum) {
    const dp = [];
    const visitedNodesInOrder = [];
    sum = parseInt(sum);
    for(let i = 0; i<= sum; i++){
        dp[i] = []
        dp[0][i] = false; 
        visitedNodesInOrder.push(createNode(0 + 1, i + 1, 0))
    }
    for (let i = 1; i <= nums.length; i++) {
        for (let j = 0; j <= sum; j++) {
            if(j - nums[i - 1] >= 0){
                if(dp[i-1][j] === true){
                    dp[i][j] = true;
                    visitedNodesInOrder.push(createNode(i + 1, j + 1, 1))
                }
                else if(nums[i - 1] === j){
                    dp[i][j] = true;
                    visitedNodesInOrder.push(createNode(i + 1, j + 1, 1))
                }
                else if(dp[i - 1][j - nums[i-1]] === true){
                    dp[i][j] = true;
                    visitedNodesInOrder.push(createNode(i + 1, j + 1, 1))
                }
                else{
                    dp[i][j] = false; 
                    visitedNodesInOrder.push(createNode(i + 1, j + 1, 0))
                }
            }
            else{
                if(dp[i-1][j] === true){
                    dp[i][j] = true;
                    visitedNodesInOrder.push(createNode(i + 1, j + 1, 1)); 
                }
                else if(nums[i - 1] === j){
                    dp[i][j] = true;
                    visitedNodesInOrder.push(createNode(i + 1, j + 1, 1)); 
                }
                else{
                    visitedNodesInOrder.push(createNode(i + 1, j + 1, 0)); 
                }
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