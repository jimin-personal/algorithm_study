// 코드의 성능을 이야기하는데 사용되는 전문적인 용어가 필요함
// 코드를 구현할때 그 코드를 느리게하는 부분을 파악하는것이 중요함. Big O를 사용하는경우 그부분에 대한 파악을 더 잘 할수 있게 됨.

// 문1: Suppose we want to write a function that calculates the sum of all numbers from 1 upto (and including) some number n.

const addUpTo = (n: number) => {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += 1;
    }
    return total;
}

const addUpToAnother = (n: number) => {
    return n * (n + 1) / 2;
}

// What does better mean?? 속도? 적은 메모리? 읽기쉬운 코드? 세가지의 조화가 적절히 맞아야 한다.타이밍 펑션 이용
const t1 = performance.now();
addUpTo(2);
const t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);

// 시간에 문제가 있다.
// 기기마다 다른방식으로 시간을 기록함.
// 같은 기계지만 다른시간을 기록할수가 있다.
// 빠른알고리즘에서는 너무짧은시간에 코드가 진행되어 시간을 정확히 측정할 수 없다.
// Timing function 이 그것을 측정하기 어렵다면 다른표기법으로 표준화를 시킬 필요가 있다.
// 컴퓨터가 실행하는 연산의 갯수를 측정하면 된다. 매버컨디션에따라 절대적은 시간은 변할수 있지만 연산들의 갯수로 표준화가 가능하다.

// addUpToAnother함수의 경우
// 곱셈:1, 더하기1, 나누기1 >> 총 연산이 3번 (3회로 고정) 입력되는 수에 영향을 크게 받지 않음.
// addUpTo 함수의 경우
// 루프가 존재하기 때문에 n번의 연산이 존재함 >> n (n의 배수만큼 연산이 증가함 > 입력되는 숫자에 비례해서 연산의 갯수가 증가함)

// Big O 는 입력된 내용이 늘어날수록 알고리즘의 식행시간이 어떻게 변하는지 설명하는 방식임
// f(n) = n (연산시간이 입력값에 비례) O(n)
// f(n) = n^2 (중첩된 반복문같은 경우) O(n^2)
// f(n) = 1 (연산시간이 상수) O(1)

// Big O 표기법의 단순화 (상수제거, 기울기 제거, 가장높은 차수 사용)
// O (2n) >> O(n) / O(500) >> O(1) / O(13n^2) >> O(n^2) / O(n+10) > O(n) / O(n^2 + 5n +8) >> O(n^2)
// n이 커질수록 단순화될 수 있는 경우는 O(1) 이라고 표시할수 있음


// 공간복잡도: 입력이 커질수록 알고리즘의 공간, 메모리사용정도에 대해 설명하는 이론
// boolean, numbers, undefined, null 은 공간을 차지하지 않음
// string 은 O(n) 의 공간을 차지함 >> n은 string 의 길이
// reference 타입 (+배열, 객체) 도 O(n) >> n은 배열의 길이 또는 키의 갯수

const double = (arr: any[]) => {
    const newArr = []; // O(n)
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    return newArr // n number; >> O(n)
}

// 로그 (Logarithm)
// 정렬알고리즘, 탐색알고리즘, 재귀알고리즘(공간복잡도)