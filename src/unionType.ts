// ? UnionType: 자바스크립트의 OR(||)와 같은 의미
// * 1. UnionType을 쓰는 이유(장점)
function getAge(age: any) {
    age.toFixed();
    return age;
}
console.log(getAge(22)); // any를 쓰면 일반 자바스크립트와 동일하게 사용할 수 있다

// * 아래와 같이 유니온타입을 통해 타입에 따른 분기 처리를 해줄 수 있다.
function getAge2(age: number | string) {
    if (typeof age === "number") {
        age.toFixed();
        return age;
    }
    if (typeof age === "string") {
        return age;
    }
    return new TypeError("Age must be a string or number");
}
console.log(getAge2("22"));
console.log(getAge2(30));

// * 2. Intersection Type: 여러 타입을 모두 만족하는 하나의 타입을 의미
interface Person {
    name: string;
    age: number;
}
interface Developer {
    name: string;
    skill: string;
}

type Capt = Person & Developer; // Person 과 Developer의 합집합

// ! 주의할 점
function introduce(someone: Person | Developer) {
    someone.name;
    someone.age;
    // someone.skill; // ! Person으로 타입을 추론할 경우 skill값을 알 수 없어 에러 발생
}

// * 공통 속성인 someone.name만 접근 가능하다
