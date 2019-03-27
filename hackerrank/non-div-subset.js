// from https://www.hackerrank.com/challenges/non-divisible-subset/problem

const VALUE = 0;
const COUNT = 1;

// Complete the nonDivisibleSubset function below.
function nonDivisibleSubset(k, S) {
    // all sums % 1 are 0, and no sums % 0 are possible, so greatest subset is 1 (allowing no pairs)
    if (k <= 1) {
        return 1;
    }

    // store remainders in array, such that each array item is formatted as [value, count] (see helper function)
    let remainders = [];
    for (let i = 0; i < S.length; i++) {
        // using helper function
        insert(remainders, S[i] % k);
    }

    // identify items that, when summed, and modded k, === 0
    for (let i = 0; i < remainders.length - 1; i++) {
        for (let j = 1; j < remainders.length; j++) {
            // if an item itself % k is 0, or the item plus itself % k is 0, we can only have one of it!
            if (remainders[i][VALUE] % k === 0 || (remainders[i][VALUE] * 2) % k === 0) {
                remainders[i][COUNT] = 1;
            }
            if (remainders[j][VALUE] % k === 0 || (remainders[j][VALUE] * 2) % k === 0) {
                remainders[j][COUNT] = 1;
            }

            // if two items summed % k are zero, they can't coexist; reduce count of the less prevalent to 0
            if (remainders[i][VALUE] + remainders[j][VALUE] === k) {
                // if a mod match found, remove items for the lesser count
                if (remainders[i][COUNT] > remainders[j][COUNT]) {
                    remainders[j][COUNT] = 0;
                }
                else {
                    remainders[i][COUNT] = 0;
                }
            }
        }
    }

    // grab and return the total
    let result = remainders.reduce((total, current) => total + current[COUNT], 0);
    return result;
}

// insert an item into this array
function insert(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i][VALUE] === item) {
            array[i][COUNT]++;
            return;
        }
    }
    array.push([item, 1]);
}
