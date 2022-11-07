"use strict";
function leapYear(num) {
    if (((num % 4) == 0) && (num % 100 != 0) || (num % 400 == 0)) {
        return num + " is a leap year :)";
    }
    else {
        return num + " is not a leap year :(";
    }
}
console.log(leapYear(2000));
console.log(leapYear(2022));
//# sourceMappingURL=findLeapYear.js.map