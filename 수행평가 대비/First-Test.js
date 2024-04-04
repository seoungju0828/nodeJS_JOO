//function

// ver 1
function fun1(text) {
    console.log("text : " + text);
}

// ver 2
let fun2 = fun1;

// ver 3
let fun3 = function (text) {
    console.log("text : " + text);
}

//arrow function

// ver 1
let fun4 = (text) => {
    return text;
}

// ver 2
let fun5 = text => {
    return text;
}

// ver 3
let fun6 = text => text;

//object


const student = {
    "name" : "노승주",
    "age" : 19,
    "subject" : ["kor", "eng"]
}

console.log(student.age);
console.log(student.name);

student.city = "seoul";
delete student.city;

//callback

function somefunc(callback) {
    console.log("함수 실행");
    callback();
}

function cb() {
    console.log("콜백함수 실행");
}

console.log(cb);

let name = '노승주';
console.log(`name is ${name}`);

// for, forEach, for of

var arr = [1, 2, 3];

// for
for (var i=0; i<arr.length; i++) {
    console.log(arr[i]);
}

// forEach
arr.forEach(function (f) {
    console.log(f); 
})

// for of
for (const f of arr) {
    console.log(f);
}