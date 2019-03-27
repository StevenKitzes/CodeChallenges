// from https://www.hackerrank.com/challenges/equality-in-a-array/problem

// Complete the equalizeArray function below.
function equalizeArray(arr) {
    let max = 0;
    let found = new Array(101).fill(0);

    for (let i = 0; i < arr.length; i++) {
        found[arr[i]]++;
        if (found[arr[i]] > max) max = found[arr[i]];
    }
    return arr.length - max;
}
