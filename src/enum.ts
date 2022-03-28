// ? Enums: 특정 값들의 집합을 의미하는 자료형
// * 1. 숫자형 Enums
enum Direction {
    Up = 1, // 초기값을 설정해주면 차례대로 1씩 증가시킨다, 초기값이 없는 경우 0부터 1씩 차례로 증가한다
    Down,
    Left,
    Right,
}

console.log(Direction);

// * 2. 문자형 Enums: 초기값을 모두 설정해줘야 한다
// ! 숫자형과 문자형을 혼합한 Enums을 사용할 수 있지만, 권장하지 않는다
enum Direction2 {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right",
}
