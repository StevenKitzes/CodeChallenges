// from https://www.hackerrank.com/challenges/strange-code/problem

// Complete the strangeCounter function below.
function strangeCounter(t) {
    // start at 3 by specification
    let valStart = 3;
    let val = valStart;

    // strategy is to consume time and modify value as we go
    while (t) {
        // if we can consume time without exhausting completely, skip to next value peak
        if (t - val > 0) {
            t -= val;
            val *= 2;
        }
        // if this value peak consumes all remaining time
        else {
            val = val - (t - 1);  // this "magic" -1 is because time is 1 based, not 0
            t = 0;
        }
    }
    return val;
}
