// from https://www.hackerrank.com/challenges/queens-attack-2/problem

// helpers for marking mini-array indices more readably 
const ROW = 0;
const COL = 1;

// Complete the queensAttack function below. (i renamed the vars)
function queensAttack(board_dim, k, queenStartRow, queenStartCol, obstacles) {
    // decrementing input to zero-base it
    queenStartCol--; queenStartRow--;

    let total = 0;
    let obstByCol = new Array(board_dim);

    // set up obstacle tracking; for obstacle collision detection efficiency,
    // we simply build an array where each index represents a column.  if there
    // are obstacles present on that column, we have a set (with access time
    // complexity O(1)) marking every row where an obstacle exists on that col
    obstacles.forEach((obst) => {
        let col = obst[COL] - 1;

        if (!obstByCol[col]) {
            obstByCol[col] = new Set();
        }

        obstByCol[col].add(obst[ROW] - 1);
    })

    let valid = true;
    let queenRow = queenStartRow, queenCol = queenStartCol;

    // for each of the following, the move function accepts a velocity such that:
    // velocity is an array: [rowVelocity, columnVelocity]

    // try moving queen up
    while (valid) valid = move([-1, 0]);
    // try moving queen down
    reset();
    while (valid) valid = move([1, 0]);
    // try moving queen left
    reset();
    while (valid) valid = move([0, -1]);
    // try moving queen right
    reset();
    while (valid) valid = move([0, 1]);
    // try moving queen up-left
    reset();
    while (valid) valid = move([-1, -1]);
    // try moving queen up-right
    reset();
    while (valid) valid = move([-1, 1]);
    // try moving queen down-left
    reset();
    while (valid) valid = move([1, -1]);
    // try moving queen down-right
    reset();
    while (valid) valid = move([1, 1]);

    return total;

    // moves queen, validate, return true and update for valid, false for invalid
    function move(velocity) {
        queenRow += velocity[ROW];
        queenCol += velocity[COL];

        // if this move results in collision with obstacle, return false
        if (
            (obstByCol[queenCol] && obstByCol[queenCol].has(queenRow)) ||
            (velocity[ROW] < 0 && queenRow < 0) ||
            (velocity[COL] < 0 && queenCol < 0) ||
            (velocity[ROW] && queenRow >= board_dim) ||
            (velocity[COL] && queenCol >= board_dim)
        ) return false;

        total++;

        return true;
    }

    function reset() {
        valid = true;
        queenRow = queenStartRow;
        queenCol = queenStartCol;
    }
}
