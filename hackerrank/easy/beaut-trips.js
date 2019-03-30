// from https://www.hackerrank.com/challenges/beautiful-triplets/problem

// Complete the beautifulTriplets function below.
function beautifulTriplets(d, arr) {
    let total = 0;
    // record second indices of pairs that result in the beautiful value
    let secondIndices = new Array(10000).fill(0);

    // for every pair
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            // check if this pair satisfies the beautiful value
            let k = Math.abs(arr[j]) - Math.abs(arr[i]);
            if (k === d) {
                // if so, note that this pair was satisfactory
                secondIndices[j]++;
                // if this pair's first index is already recorded as a second from earlier, it's a beautiful triplet!
                if (secondIndices[i]) {
                    total += secondIndices[i];
                }
            }
        }
    }
    return total;
}
