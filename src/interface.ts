// interface는 자바스크립트 코드로 컴파일되지 않음
interface Human {
    name: string;
    age: number;
    gender: string;
}

// object를 정의할 때, interface에서 정의된 순서에 맞춰서 작성할 필요는 없다
// 하지만 순서를 맞춰 작성하는게 유지보수에 있어 좋겠다
const person = {
    name: "haechan",
    age: 24,
    gender: "male",
};

const sayHi2 = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender} wow ~.`;
};

console.log(sayHi2(person));
