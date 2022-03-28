/*
- interface는 상호간 정의한 약속 혹은 규칙

- 객체의 스펙(속성, 속성의 타입)
- 함수의 파라미터
- 함수의 스펙(파라미터, 반환타입 등)
- 배열과 객체를 접근하는 방식
- 클래스
*/

// interface는 자바스크립트 코드로 컴파일되지 않음
interface Human {
    name: string;
    age: number;
    gender: string;
}

const sayHi2 = (obj: Human): string => {
    return `Hello ${obj.name}, you are ${obj.age}, you are a ${obj.gender} wow ~.`;
};

// object를 정의할 때, interface에서 정의된 순서에 맞춰서 작성할 필요는 없다
// 하지만 순서를 맞춰 작성하는게 유지보수에 있어 좋겠다
const person = {
    name: "haechan",
    age: 24,
    gender: "male",
};

console.log(sayHi2(person));
