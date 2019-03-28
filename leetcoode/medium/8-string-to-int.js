// from https://leetcode.com/problems/string-to-integer-atoi/

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let start = getFirstDigitIndex(str);
    if(start === null) {
        return 0;
    }
    let end = getLastDigitIndex(str);
    if(end === -1) {
        return 0;
    }
    let firstIsSymbol = str[start] === '-' || str[start] === '+' ? true : false;
    if(firstIsSymbol) start++;
    let out = 0;
    let multiplier = 1;
    for(let i = end; i >= start; i--) {
        if(!(str[i] >= '0' && str[i] <= '9')) {
            return 0;
        }
        out += multiplier * parseInt(str[i]);
        multiplier *= 10;
    }
    if(firstIsSymbol && str[start-1] === '-') out = out * -1;
    if(out > 2147483647) {
        out = 2147483647;
    }
    if(out < -2147483648) {
        out = -2147483648;
    }
    return out;
};

// find first numeric index
var getFirstDigitIndex = function(str) {
    let digFound = false;
    let index = 0;
    
    // first handle whitespace
    while(index < str.length && str[index] === ' ') {
        index++;
    }
    
    // iterate until we run out of chars
    while(index < str.length) {
        // if a numeric or sign not found as first char, bounce out with null
        if(['-','+','0','1','2','3','4','5','6','7','8','9','0'].indexOf(str[index]) === -1) return null;
        
        // if sign found, verify next char is a digit and return the sign itself as "first numeric"
        if(str[index] === '-' || str[index] === '+') {
            index++;
            if(str[index] >= '0' && str[index] <= '9') {
                return --index;
            }
            // if char following sign not numeric, bounce null
            return null;
        }
        
        // if first char after white space is just a numeric, return that index
        if(str[index] >= '0' && str[index] <= '9') {
            digFound = true;
            return index;
        }
    }
}

// start from first numeric index, and find last valid (not necessarily absolute last)
var getLastDigitIndex = function(str) {
    let index = getFirstDigitIndex(str);
    if(str[index] === '-' || str[index] === '+') {
        index++;
    }
    
    // catch what should be an impossible case if getFirstDigitIndex did its job
    if(str[index] < '0' || str[index] > '9') {
        return -1;
    }
    
    // iterate until we run out of chars or encounter a non-numeric
    while(index < str.length) {
        if(str[index] >= '0' && str[index] <= '9') {
            index++;
        }
        else return index - 1;
    }
    if(index >= str.length) return index - 1;
}
