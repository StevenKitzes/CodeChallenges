// from https://www.hackerrank.com/challenges/repeated-string/problem

// Complete the repeatedString function below.
function repeatedString(s, n) {
    // 'a' never provided, just return
    if (-1 === s.indexOf('a')) return 0;

    // get some basic info about relationship between string and length of measurement
    let repeats = Math.floor(n / s.length);
    let rmndr = n % s.length;

    // vars to track our counts
    let aPerRep = 0;
    let aBefRmndr = 0;

    let total = 0;

    // count our a's
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === 'a') {
            aPerRep++;
            if (i < rmndr) aBefRmndr++;
        }
    }
    
    total = aBefRmndr + (aPerRep * repeats);
    return total;
}
