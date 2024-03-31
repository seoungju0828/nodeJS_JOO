const name1 = 'Alice';
const age1 = 30;

console.log(`제 이름은 ${name1}이고, 나이는 ${age1}입니다.`);

greet2 = (a, b) => {
    return a*b;
}

console.log(greet2(2, 4));

const addNumbers = (num1, num2) => num1 + num2;

console.log(addNumbers(7, 5));

const person4 = {
    name: 'Alice',
    age: 25
};

person4.height = 170;

console.log(person4.name);
console.log(person4.age);

console.log(1 == "1"); 
console.log(1 === "1"); 

console.log("값이 다른 이유는 ==는 값만 비교, ===는 값과 타입 모두 비교");

const jsonStr7 = '{"name":"Alice","age":30}';

const str7Obj = JSON.parse(jsonStr7);
console.log(str7Obj);
console.log(str7Obj.age);

console.log(JSON.stringify(str7Obj));

const name8 = '';
const displayName1 = name8 ?? 'Anonymous';
const displayName2 = name8 || 'Anonymous';

console.log("displayName1 : " + displayName1); 
console.log("displayName2 : " + displayName2);

console.log("다음 값이 다른 이유는 ??는 null, undefine일 때만 하는거고, ||는 오른쪽 값이 false일 때만 실행");