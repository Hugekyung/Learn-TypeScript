function sum(a: number, b: number): number {
    return a + b;
}

// 인자에 ?를 넣어주면 해당 인자는 선택적인 값이 된다(즉, 넣어주지 않아도 실행됨)
function sum2(a: number, b?: number): number {
    return a + b;
}

// number[]: number 타입의 원소로 구성된 리스트
function sum3(a: number, nums: number[]): number {
    let totalNums: number = 0;
    for (let num in nums) {
        totalNums += nums[num];
    }
    return a + totalNums;
}

console.log(sum(1, 2));
console.log(sum(1, 2));
console.log(sum3(1, [1, 2, 3]));
