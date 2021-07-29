export function isMatch(s, p) {
    console.log(s)
    const visitedNodesInOrder = [];
    var text=s, pattern=p;
    console.log("text is")
    console.log(text)
    console.log("pattern is")
    console.log(pattern)
    var T = [];
    for (var i = 0; i <= text.length; i++) {
        T[i] = [];
        for (var j = 0; j <= pattern.length; j++) {
            if (i === 0 && j === 0) {
                T[i][j] = true;
                visitedNodesInOrder.push(createNode(i + 1, j + 1, 1))
                continue;
            }
            if (j === 0) {
                T[i][j] = false;
                visitedNodesInOrder.push(createNode(i + 1, j + 1, 0))
                continue;
            }
            if (i === 0) { 
                if (pattern.charAt(j - 1) === '*' && j > 0) {
                    T[i][j] = T[i][j - 1];
                    if(T[i][j] === true){
                        visitedNodesInOrder.push(createNode(i + 1, j + 1, 1))
                    }
                    else{
                        visitedNodesInOrder.push(createNode(i + 1, j + 1, 0))
                    }
                }
                else
                    T[i][j] = false;
                    visitedNodesInOrder.push(createNode(i + 1, j + 1, 0))
                continue;
            }
            if (text.charAt(i - 1) === pattern.charAt(j - 1) || pattern.charAt(j - 1) === '?') {
                T[i][j] = T[i - 1][j - 1];
                if(T[i][j] === true){
                    visitedNodesInOrder.push(createNode(i + 1, j + 1, 1))
                }
                else{
                    visitedNodesInOrder.push(createNode(i + 1, j + 1, 0))
                }

            }
            else if (pattern[j - 1] === '*') {
                if (T[i][j - 1] === true || T[i-1][j]=== true){
                    T[i][j] = true;
                    visitedNodesInOrder.push(createNode(i + 1, j + 1, 1));
                }   
                else{
                    T[i][j] = false;
                    visitedNodesInOrder.push(createNode(i + 1, j + 1, 0));
                }
            }            
            else{
                T[i][j] = false;
                visitedNodesInOrder.push(createNode(i + 1, j + 1, 0));
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