// from https://www.hackerrank.com/challenges/30-binary-numbers/problem

function main() {
    const input = parseInt(readLine(), 10);
    let n = input;
    let bin = '';
    let flag = Number.MAX_SAFE_INTEGER;
    
    // build binary string representation of input
    while (flag >= 1) {
        if (n >= flag) {
            bin += '1';
            n -= flag;
        }
        else {
            bin += '0';
        }

        if (flag <= 1) flag = 0;
        else flag = Math.round(flag/2);
    }

    // count consecutive 1's in the binary string
    let streak = 0;
    let current = 0;
    for (let i = 0; i < bin.length; i++) {
        if (bin[i] === '1') {
            current++;
        }
        if (bin[i] === '0' || i === bin.length - 1) {
            if (current > streak) streak = current;
            current = 0;
        }
    }
    console.log(streak);
}
