// Performs Dijkstra's algorithm; returns *all* nodes in the order
// in which they were visited. Also makes nodes point back to their
// previous node, effectively allowing us to compute the shortest path
// by backtracking from the finish node.
export function dijkstra(s) {
  console.log(s)
  const visitedNodesInOrder = [];
  var dp = []; //dp[i][j] -> is s[i:j] a palindromic string
    for(var i = 0; i < s.length;  i++) {
        dp[i] = Array(s.length).fill(false);
        for(var j = 0; j < s.length; j++){
          visitedNodesInOrder.push(createNode(i + 1, j + 1, 0))
        }
        dp[i][i] = true;
        visitedNodesInOrder.push(createNode(i + 1, i + 1, 1))
    }
    var left = 0;
    var right = 0;
    for(var i = s.length - 1; i >= 0; i--) {
        for(var j = i + 1; j < s.length; j++) {
            if(s[i] === s[j]) {
                if(j - i === 1 || dp[i + 1][j - 1]) {
                    dp[i][j] = true;
                    visitedNodesInOrder.push(createNode(i + 1, j + 1, 1))
                    if(j - i > right - left) {
                        right = j;
                        left = i;
                    }
                }
            }
        }
    }
    console.log("Visited nodes from Dijsktra")
    console.log(visitedNodesInOrder)
    return visitedNodesInOrder;
}

const createNode = (row, col, status_in) => {
  return {
    row,
    col,
    status: status_in, 

  };
};
  
  function sortNodesByDistance(unvisitedNodes) {
    unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
  }
  
  function updateUnvisitedNeighbors(node, grid) {
    const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
    for (const neighbor of unvisitedNeighbors) {
      neighbor.distance = node.distance + 1;
      neighbor.previousNode = node;
    }
  }
  
  function getUnvisitedNeighbors(node, grid) {
    const neighbors = [];
    const {col, row} = node;
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    return neighbors.filter(neighbor => !neighbor.isVisited);
  }

  function getAllNodes(grid) {
    const nodes = [];
    for (const row of grid) {
      for (const node of row) {
        nodes.push(node);
      }
    }
    return nodes;
  }
  
  // Backtracks from the finishNode to find the shortest path.
  // Only works when called *after* the dijkstra method above.
  export function getNodesInShortestPathOrder(finishNode) {
    const nodesInShortestPathOrder = [];
    let currentNode = finishNode;
    while (currentNode !== null) {
      nodesInShortestPathOrder.unshift(currentNode);
      currentNode = currentNode.previousNode;
    }
    return nodesInShortestPathOrder;
  }
  