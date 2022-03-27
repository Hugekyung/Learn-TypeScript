class Human {
    public name: string;
    public age: number; // private으로 설정하면 클래스 밖에서 해당 변수에 접근할 수 없음
    public gender: string;

    // constructor는 생성자
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const taekyung = new Human("taekyung", 20, "male");

const sayHi3 = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender} wow ~.`;
};

console.log(sayHi3(taekyung));
