// * 1. interface option

interface CraftBeer {
    name: string;
    hop?: number;
}

let myBeer = {
    name: "Hans",
};

const brewBeer = (beer: CraftBeer): void => {
    console.log(beer.name);
};

brewBeer(myBeer);

// * 2. interface readOnly
interface CraftBeer2 {
    readonly brand: string; // 읽기 전용으로 선언된 속성은 수정할 수 없다
}

// * 3. 읽기 전용 배열
let arr: ReadonlyArray<number> = [1, 2, 3];
let arr2: ReadonlyArray<string> = ["a", "b", "c"];

// * 4. 인터페이스를 정의하지 않은 속성을 사용하는 방법
interface CraftBeer3 {
    brand?: string;
    [propName: string]: any; // 이와 같은 방식으로 정의되지 않은 속성을 사용할 수 있다
}

// * 5. 함수 타입 정의
interface login {
    (username: string, password: string): boolean; // 함수 인자의 타입, 반환값의 타입 지정
}

let loginUser: login;
loginUser = (id: string, pw: string) => {
    console.log(`Hello ${id} User !`);
    return true;
};

loginUser("haechan", "1234");

// * 6. 클래스 타입
interface CraftBeer4 {
    beerName: string;
    nameBeer(beer: string): void;
}

class myBeer2 implements CraftBeer4 {
    beerName: string = "Guinness";
    nameBeer(b: string) {
        this.beerName = b;
    }
    constructor() {}
}

// * 7. 인터페이스 상속(여러개의 인터페이스 상속도 가능하다)
interface Person {
    name: string;
}
interface Drinker extends Person {
    drink: string;
}
interface Developer extends Drinker {
    skill: string;
}
let fe = {} as Developer;
fe.name = "haechan";
fe.drink = "Beer";
fe.skill = "TypeScript";

console.log(fe);
