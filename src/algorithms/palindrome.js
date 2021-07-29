export function palindrome(s) {
  console.log(s)
  const visitedNodes = [];
  var dp = []; 
    for(var i1 = 0; i1 < s.length;  i1++) {
        dp[i1] = Array(s.length).fill(false);
        for(var j1 = 0; j1 < s.length; j1++){
          visitedNodes.push(createNode(i1 + 1, j1 + 1, 0))
        }
        dp[i1][i1] = true;
        visitedNodes.push(createNode(i1 + 1, i1 + 1, 1))
    }
    var left = 0;
    var right = 0;
    for(var i = s.length - 1; i >= 0; i--) {
        for(var j = i + 1; j < s.length; j++) {
            if(s[i] === s[j]) {
                if(j - i === 1 || dp[i + 1][j - 1]) {
                    dp[i][j] = true;
                    visitedNodes.push(createNode(i + 1, j + 1, 1))
                    if(j - i > right - left) {
                        right = j;
                        left = i;
                    }
                }
            }
        }
    }
    console.log("Visited nodes from Dijsktra")
    console.log(visitedNodes)
    return visitedNodes;
}

const createNode = (row, col, status_in) => {
  return {
    row,
    col,
    status: status_in, 

  };
};
  
