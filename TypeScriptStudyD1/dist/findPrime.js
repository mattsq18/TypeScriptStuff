"use strict";
function primer(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
console.log(13);
console.log(44);
//# sourceMappingURL=findPrime.js.map