/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var Node = function(id) {
    this.name = id.toString();
    this.id = id;
    this.adj = new Set();
}

var findRedundantConnection = function(edges) {
    let visited = new Set();
    let graph = {};
    let path = [];
    
    // populate graph
    for(let edge = 0; edge < edges.length; edge++) {
        for(let node = 0; node < edges[edge].length; node++) {
            let n = new Node(edges[edge][node]);
            if(!graph[n.name]) {
                graph[n.name] = n;
            }
        }
    }
    // populate adjacencies
    for(let edge = 0; edge < edges.length; edge++) {
        graph[edges[edge][0].toString()].adj.add(graph[edges[edge][1].toString()]);
        graph[edges[edge][1].toString()].adj.add(graph[edges[edge][0].toString()]);
    }
    
    // try the finderino
    for(let node in graph) {
        visited.clear();
        path = [];
        if(dfs(visited, graph, path, graph[node], graph[node], null)) {
            console.log('loop found with path: ', path);
            break;
        }
    }
    
    // find highest index in path
    let max = -1;
    for(let i = path.indexOf(path[path.length-1]); i < path.length - 1; i++) {
        for(let edge = 0; edge < edges.length; edge++) {
            if(edge <= max) continue;
            let pathA = parseInt(path[i]);
            let pathB = parseInt(path[i+1]);
            if(
                (pathA === edges[edge][0] && pathB === edges[edge][1]) ||
                (pathA === edges[edge][1] && pathB === edges[edge][0])
            ) {
                if(edge > max) max = edge;
                break;
            }
        }
    }
    
    return edges[max];
};

var dfs = function(visited, graph, path, current, target, parent) {
    path.push(current.name);
    if(visited.has(current)) {
        return true;
    }
    visited.add(current);
    let set = Array.from(current.adj);
    for(let adjacency = 0; adjacency < set.length; adjacency++) {
        if(set[adjacency] === parent) continue; // skip no tagbacks
        if(dfs(visited, graph, path, set[adjacency], target, current)) return true;
    }
    path.pop();
    return false;
}
