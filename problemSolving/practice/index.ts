/*
빈도수 세기 - sameFrequency
sameFrequency라는 함수를 작성하세요. 두 개의 양의 정수가 주어졌을 때, 두 숫자의 자릿수가 같은 빈도를 갖는지 구합니다.

여러분의 솔루션은 반드시 다음과 같은 복잡성을 가져야 합니다.:
Time: O(N)

예시 인풋:
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
* */

const sameFrequency = (num1: number, num2: number) => {
    if (num1.toString().length !== num2.toString().length) {
        return false;
    }

    const num1Composition = {};
    const num2Composition = {};

    for (let numPart1 of num1.toString()) {
        num1Composition[numPart1] = (num1Composition[numPart1] || 0) + 1;
    }

    for (let numPart2 of num2.toString()) {
        num2Composition[numPart2] = (num2Composition[numPart2] || 0) + 1;
    }

    for (let num1CompositionKey in num1Composition) {
        if (!num2Composition[num1CompositionKey]) { // 없어도 되는 파트
            return false;
        }

        if (num2Composition[num1CompositionKey] !== num2Composition[num1CompositionKey]) {
            return false;
        }
    }

    return true
}


/*
* 빈도수 세기 / 다중 포인터 - areThereDuplicates
가변적인 수의 인수(a variable number of arguments)를 받아들이고 전달된 인자 중 중복이 있는지 확인하는 areThereDuplicates라는 함수를 구현합니다.  빈도 카운터 패턴 또는 다중 포인터 패턴을 사용하여 이 문제를 해결할 수 있습니다.

예시:
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true

제약 조건:
Time - O(n)
Space - O(n)
보너스:
Time - O(n log n)
Space - O(1)
* */
const areThereDuplicates = (...args: any[]) => {
    let min = 0;
    let max = args.length - 1;

    while (min < max) {
        if (args[min] === args[max]) {
            return true;
        } else if (args[min] !== args[max]) {
            min++;
        }
    }

    return false
}

// on liner solution
const areThereDuplicatesOneLiner = (...args: any[]) => {
    return new Set(args).size !== args.length;
}