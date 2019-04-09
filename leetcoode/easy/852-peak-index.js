// from https://leetcode.com/problems/peak-index-in-a-mountain-array/

/**
 * @param {number[]} A
 * @return {number}
 *
 * Binary search strategy; cut active range of array in half for
 * each time we have not yet found the peak.  This only works
 * because we are guaranteed a valid mountain structure by the
 * spec.
 */
var peakIndexInMountainArray = function(A) {
    let start = 0; end = A.length;
    let i = Math.floor(A.length/2);
    
    while(!(A[i-1] < A[i] && A[i+1] < A[i])) {
        if(A[i] < A[i-1]) {
            end = i;
            i = start + Math.floor((end - start) / 2);
        }
        else if(A[i] < A[i+1]) {
            start = i;
            i = start + Math.floor((end-start)/2);
        }
    }
    
    return i;
};
