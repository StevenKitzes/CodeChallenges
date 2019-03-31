// from https://leetcode.com/problems/delete-columns-to-make-sorted/
// >92%ile solution!

/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
    let d = 0;
    let valid = true;
    let c = 0;
    while(c < A[0].length) {
        let deleteCol = false;
        for(let i = 1; i < A.length; i++) {
            if(A[i][c] < A[i-1][c]) {
                deleteCol = true;
            }
        }
        c++;
        if(deleteCol) d++;
    }
    return d;
};
