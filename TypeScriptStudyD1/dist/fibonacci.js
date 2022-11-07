"use strict";
function fibonacci(num) {
    let n1 = 0, n2 = 1;
    for (let i = 1; i <= num; i++) {
        console.log(n1);
        let next = n1 + n2;
        n1 = n2;
        n2 = next;
    }
}
fibonacci(10);
//# sourceMappingURL=fibonacci.js.map