// from 

var debug = false;
function log(msg) {
    if (debug) console.log(msg);
}

const ROW = 0;
const COL = 1;

// Complete the queensAttack function below. (i renamed the vars)
function queensAttack(board_dim, k, queenStartRow, queenStartCol, obstacles) {
    queenStartCol--; queenStartRow--;
    let total = 0;
    let obstByCol = new Array(board_dim);
    obstacles.forEach((obst) => {
        log('looking at obst', obst);
        let col = obst[COL] - 1;
        if (!obstByCol[col]) {
            obstByCol[col] = new Set();
        }
        obstByCol[col].add(obst[ROW] - 1);
        log('after op', obstByCol);
    })

    // try moving queen up
    let valid = true;
    let queenRow = queenStartRow, queenCol = queenStartCol;
    while (valid) {
        // move
        queenRow--;
        // check valid
        if (queenRow < 0 || (obstByCol[queenCol] && obstByCol[queenCol].has(queenRow))) {
            valid = false;
            continue;
        }
        upTotal();
    }
    // try moving queen down
    reset();
    while (valid) {
        // move
        queenRow++;
        // check valid
        if (queenRow >= board_dim || (obstByCol[queenCol] && obstByCol[queenCol].has(queenRow))) {
            valid = false;
            continue;
        }
        upTotal();
    }
    // try moving queen left
    reset();
    while (valid) {
        // move
        queenCol--;
        // check valid
        if (queenCol < 0 || (obstByCol[queenCol] && obstByCol[queenCol].has(queenRow))) {
            valid = false;
            continue;
        }
        upTotal();
    }
    // try moving queen right
    reset();
    while (valid) {
        // move
        queenCol++;
        // check valid
        if (queenCol >= board_dim || (obstByCol[queenCol] && obstByCol[queenCol].has(queenRow))) {
            valid = false;
            continue;
        }
        upTotal();
    }
    // try moving queen up-left
    reset();
    while (valid) {
        // move
        queenRow--; queenCol--;
        // check valid
        if (
            queenRow < 0 ||
            queenCol < 0 ||
            (obstByCol[queenCol] && obstByCol[queenCol].has(queenRow))
        ) {
            valid = false;
            continue;
        }
        upTotal();
    }
    // try moving queen up-right
    reset();
    while (valid) {
        // move
        queenRow--; queenCol++;
        // check valid
        if (
            queenRow < 0 ||
            queenCol >= board_dim ||
            (obstByCol[queenCol] && obstByCol[queenCol].has(queenRow))
        ) {
            valid = false;
            continue;
        }
        upTotal();
    }
    // try moving queen down-left
    reset();
    while (valid) {
        // move
        queenRow++; queenCol--;
        // check valid
        if (
            queenRow >= board_dim ||
            queenCol < 0 ||
            (obstByCol[queenCol] && obstByCol[queenCol].has(queenRow))
        ) {
            valid = false;
            continue;
        }
        upTotal();
    }
    // try moving queen down-right
    reset();
    while (valid) {
        // move
        queenRow++; queenCol++;
        // check valid
        if (
            queenRow >= board_dim ||
            queenCol >= board_dim ||
            (obstByCol[queenCol] && obstByCol[queenCol].has(queenRow))
        ) {
            valid = false;
            continue;
        }
        upTotal();
    }
    return total;

    function reset() {
        valid = true;
        queenRow = queenStartRow;
        queenCol = queenStartCol;
    }

    function upTotal() {
        total++;
        log('upping total on space:', queenRow, queenCol);
        log('obsts on col:', obstByCol[queenCol]);
    }
}
