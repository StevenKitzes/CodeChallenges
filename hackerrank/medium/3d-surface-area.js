// from https://www.hackerrank.com/challenges/3d-surface-area/problem

// Complete the surfaceArea function below.
function surfaceArea(A) {
    let area = 2 * A.length * A[0].length;
    for (let row = 0; row < A.length; row++) {
        for (let col = 0; col < A[0].length; col++) {
            // if no cubes on this coord, remove the top/bottom area for it
            if (A[row][col] === 0) {
                area -= 2;
            }

            // if this is an upper row
            if (row === 0) area += A[row][col];
            // if this is a left col
            if (col === 0) area += A[row][col];
            // if bottom row
            if (row === A.length - 1) area += A[row][col];
            // if right col
            if (col === A[0].length - 1) area += A[row][col];

            // all cells!
            if (row !== A.length - 1) {
                area += Math.abs(A[row][col] - A[row + 1][col]);
            }
            if (col !== A[0].length - 1) {
                area += Math.abs(A[row][col] - A[row][col + 1]);
            }
        }
    }
    return area;
}
