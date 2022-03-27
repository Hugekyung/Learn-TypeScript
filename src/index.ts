const name: string = "haechan";
const age: number = 31;
const gender: string = "male";

// return 값이 없는 function의 경우 반환타입은 void로 지정
const sayHi = (name: string, age: number, gender: string): void => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}.`);
};

const sayHi2 = (name: string, age: number, gender: string): string => {
    return `Hello ${name}, you are ${age}, you are a ${gender} wow ~.`;
};

sayHi(name, age, gender);
console.log(sayHi2(name, age, gender));

export {};
