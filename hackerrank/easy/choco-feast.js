// from https://www.hackerrank.com/challenges/chocolate-feast/problem

// Complete the chocolateFeast function below.
function chocolateFeast(cash, cost, promo) {
    let wrappers = Math.floor(cash / cost);
    let total = wrappers;
    
    while (wrappers >= promo) {
        // new wrappers we can buy for how many we already have
        let k = Math.floor(wrappers / promo);
        
        // (promo-1) to account for wrappers we get back (1k)
        wrappers -= k * (promo-1);
        
        // update total
        total += k;
    }

    return total;
}
