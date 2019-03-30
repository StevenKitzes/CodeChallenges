// from https://leetcode.com/problems/all-paths-from-source-to-target/

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let paths = [];
    let currentPath = [];
    let n = graph.length - 1;
    
    r_search(graph, n, 0, currentPath, paths);
    
    return paths;
};

// recursively search for paths leading from 0 to N-1
function r_search(graph, n, node, currentPath, paths) {
    // put the current node on the path
    currentPath.push(node);
    
    // base case: if end of path is the goal, note this path is complete
    if(currentPath[currentPath.length - 1] === n) {
        paths.push(Array.from(currentPath));
    }
    
    // recurse for each node this node connects to
    for(let i = 0; i < graph[node].length; i++) {
        let nextNode = graph[node][i];
        r_search(graph, n, nextNode, currentPath, paths);
    }
    
    currentPath.pop();
}
