// * 1. readonly: 접근만 가능하게 하는 속성
class Developer {
    readonly myName: string;
    constructor(theName: string) {
        this.myName = theName;
    }
}
let chan = new Developer("haechan");
chan.name = "yang"; // ! 수정할 수 없다

// * 2. Accessor
class Developer2 {
    private name: string;

    get getName(): string {
        return this.name;
    }

    set setName(newName: string) {
        if (newName && newName.length > 5) {
            throw new Error("Name is too long !");
        }
        this.name = newName;
    }
}

// * 3. Abstract Class : 상속 대상이 되는 클래스의 속성, 메서드의 모양 등을 정의한다
// * abstarct가 붙은 클래스를 상속받은 클래스는 반드시 해당 속성을 구현해야 한다(강제)
abstract class Company {
    abstract developer(): void;
    coding(): void {
        console.log("build web site.");
    }
}

class MyCompany extends Company {
    // Company에서 상속받은 developer를 반드시 구현해야 한다
    developer(): void {
        console.log("we have 3 developers.");
    }
    designer(): void {
        console.log("we have 2 designers.");
    }
}
