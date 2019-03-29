// from 

/*
Strategy:
Beginning from the right end of the string, iterate left until we find an instance where
the left char is smaller than the right.  This left, smaller char is our target, the one
we'll want to replace with something "greater" to increase our lexicographical value.
Then, to determine which char to swap with our target, we cycle back toward the right end
of the string until we find the minimum char that is larger than the target.  Swap the two
Then, beginning *after* the target, which is now slightly larger, sort the remaining items
in minimum lexicographical order.
*/

// Complete the biggerIsGreater function below.
function biggerIsGreater(w) {
    console.log('----\nstarting', w);
    w = w.split('');
    for (let i = w.length - 1; i > 0; i--) {
        if (w[i] > w[i - 1]) {
            console.log('discovered', w[i], 'gt', w[i - 1]);
            let swapTargetIndex = i - 1;
            console.log('swap target IDed', w[swapTargetIndex]);
            let min = '{';
            for (let j = i; j < w.length; j++) {
                if (w[j] < min && w[j] > w[swapTargetIndex]) {
                    min = w[j];
                    console.log('reassigned min', min);
                } else {
                    console.log(
                        'failed w[j] < min, w[j] > w[i]',
                        w[j],
                        min,
                        w[j],
                        w[swapTargetIndex]
                    );
                }
            }
            console.log('discovered min after swap target', min);
            let j = revIndexOf(w,min);
            let temp = w[swapTargetIndex];
            w[swapTargetIndex] = w[j];
            w[j] = temp;
            console.log('swapped', w[j], w[swapTargetIndex]);
            w.splice(i, 0, ...(w.splice(i, w.length - i).sort()));
            return w.join('');
        }
    }
    return 'no answer';
}

function revIndexOf(arr, item) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === item) return i;
    }
}
