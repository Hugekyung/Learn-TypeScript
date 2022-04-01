// ? Generic은 타입스크립트에서 컴포넌트의 재사용성을 확보할 수 있게 해주는 타입 동적할당 방식이다.
// ? Generic을 통해 컴포넌트의 인자와 반환값의 타입을 동적으로 할당할 수 있게 해 유연성을 높일 수 있다.

// * Generic을 활용한 기본적인 함수 사용 방법
function identity<T>(argument: T): T {
    return argument;
}

// 호출 방법 1
let output = identity<string>("myString");

// 호출 방법 2 => 컴파일러의 타입추론 활용, 보다 간결한 코드 작성 가능
let output2 = identity("myString");

// * length 프로퍼티는 특정 타입만이 가졌기 때문에 컴파일러는 명확하지 않은 상황에 대해 에러를 낸다.
// * 아래와 같이 인자 및 반환 타입을 length프로퍼티를 가진 배열로 선언함으로써 에러를 피할 수 있다.
function getArgType<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

const instance = getArgType([1, 2, 3]);
