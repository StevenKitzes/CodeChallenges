// from https://www.hackerrank.com/challenges/the-grid-search/problem

// Complete the gridSearch function below.
function gridSearch(G, P) {
    // try the simplest/quickest methods first, if they fail, try slower ones
    if (tryByIndex(G, P)) return 'YES';
    if (tryRegex(G, P)) return 'YES';
    if (tryBruteForce(G, P)) return 'YES';
    return 'NO';
}

// brute force, just check for pattern starting at every possible index of starting grid
function tryBruteForce(G, P) {
    for (let row = 0; row < G.length + 1 - P.length; row++) {
        for (let col = 0; col < G[0].length - P.length; col++) {
            if (checkSubGrid(G, P, row, col)) return true;
        }
    }
    return false;
}
function checkSubGrid(G, P, startRow, startCol) {
    for (let row = 0; row < P.length; row++) {
        for (let col = 0; col < P[0].length; col++) {
            if (P[row][col] !== G[row + startRow][col + startCol]) return false;
        }
    }
    return true;
}

// try regex search; complexity here in the fact that regex skips matches that begin in
// the middle of other matches, necessitating brute force method as backup
function tryRegex(G, P) {
    // first, find a row that matches P[0]
    for (let row = 0; row < G.length + 1 - P.length; row++) {
        if (G[row].indexOf(P[0]) !== -1) {
            if (regexSearchArrayAt(G, P, row)) return true;
        }
    }
    return false;
}
function regexSearchArrayAt(G, P, row) {
    // first, find all possible column matches for P[0] in `row`
    let matchedCols = [];
    let regex = new RegExp(P[0], 'g');
    let match;
    while ((match = regex.exec(G[row])) !== null) {
        matchedCols.push(match.index);
    }
    for (let i = 0; i < matchedCols.length; i++) {
        let col = matchedCols[i];
        if (fullPatternMatchAt(G, P, row, col)) return true;
    }
    return false;
}
// make sure that a subgrid with a single starting column contains, in order,
// the full pattern
function fullPatternMatchAt(G, P, startRow, startCol) {
    for (let row = startRow; row < startRow + P.length; row++) {
        // on the current grid row, find all starting col matches for the current pattern row
        let matchedCols = [];
        let regex = new RegExp(P[row - startRow], 'g');
        let match;
        while ((match = regex.exec(G[row])) !== null) {
            matchedCols.push(match.index);
        }
        // if the current pattern was found but in wrong position, or not found at all, return false
        if (matchedCols.indexOf(startCol) === -1) {
            return false;
        }
    }
    return true;
}

// try the dumbest method, just check indexOf for each row to see if there's a match
function tryByIndex(G, P) {
    let row = 0;
    let foundCol = -1;
    for (; row < G.length + 1 - P.length; row++) {
        foundCol = G[row].indexOf(P[0]);
        if (foundCol !== -1) break;
    }
    for (let r = row; r < row + P.length; r++) {
        if (G[r].indexOf(P[r - row]) === -1) return false;
        // we do at least check here if all our matches are in the same column
        else if (G[r].indexOf(P[r - row]) !== foundCol) return false;
    }
    return true;
}
