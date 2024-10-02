// 재귀함수: 동일한 함수를 계속 호출하면서, 하나의 함수가 자기자신을 재귀적으로 호출하게 하는 것.
// 필수요소: Base Case: 재귀호출의 중단점, Different Input: 매번 다른 데이터를 가지고 재귀함수를 호출해야 함.

const countDown = (num: number) => {
    if (num <= 0) { // 종료 조건
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num); // 재귀
}

const sumRange = (num: number) => {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}

const factorial = (num: number) => {
    if (num === 1) return 1;
    return num * factorial(num - 1); // Stack overflow 를 조심하자~
}

const collectOddValues = (arr: number[]) => {
    let result = [];

    const helper = (helperInput: number[]) => {
        if (helperInput.length === 0) {
            return;
        }

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1));
    }

    helper(arr);
    return result;
}
