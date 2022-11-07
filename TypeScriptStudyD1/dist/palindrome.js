"use strict";
function palindrominator(str) {
    let input = str + "";
    let reversed = "";
    for (let c of input) {
        reversed = c + reversed;
    }
    return (reversed == input);
}
console.log(palindrominator(1234321));
console.log(palindrominator("racer"));
console.log(palindrominator("racecar"));
//# sourceMappingURL=palindrome.js.map