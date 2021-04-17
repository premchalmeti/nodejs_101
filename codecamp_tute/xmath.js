
function isPrime(no) {
    for(i=2;i<(no/2);i++) {
        if ((no % i) == 0) return false;
    }
    return true;
}

function isLeapYear(year) {
    return year % 4 == 0 && (year % 100 && year % 400);
}

module.exports = {isPrime, isLeapYear}
