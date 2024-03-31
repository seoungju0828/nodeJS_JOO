const {text_odd, text_even} = require("./moduleText");

function checkStringOddorEven(str) {
    if (str.length % 2) {
        return text_odd;
    } else {
        return text_even;
    }
}

//글자수로 하는 거임 글자길이가 홀수 -> 홀수, 짝수 -> 짝수
console.log("정재현 : ", checkStringOddorEven("정재현"));
console.log("재현 : ", checkStringOddorEven("재현"));

module.exports = [checkStringOddorEven, text_odd, text_even];