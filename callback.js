console.log("1");

setTimeout(() => {
    console.log("2초 경과-1");
}, 2000)                                //여기가 0이라 0초 경과여도, setTimeOut 함수가 아닌게 먼저 실행되고 난 뒤에 실행된다

console.log("2");

setTimeout(() => {
    console.log("5초 경과");
}, 5000)

console.log("3");