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

/*
* 다중 포인터 - averagePair
averagePair라는 함수를 작성합니다. 정렬된 정수 배열과 목표 평균이 주어졌을 때, 배열에 쌍의 평균이 목표 평균과 같은 값의 쌍이 있는지 확인합니다.
* 목표 평균과 일치하는 쌍이 두 개 이상 있을 수 있습니다.

보너스 제약조건:

Time: O(N)
Space: O(1)

예시 인풋:

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
* */
// 배열이 정렬되었다는 부분을 반드시 생각하자. 간과되어있었다.
const averagePair = (pair: number[], predictedAverage: number) => {
    let start = 0;
    let end = pair.length - 1;

    while (start < end) {
        const average = (pair[start] + pair[end]) / 2
        if (average === predictedAverage) {
            return true;
        } else if (average < predictedAverage) {
            start++;
        } else {
            end--;
        }
    }
    return false
}

/*
*
* 두 문자열을 받아 첫 번째 문자열의 문자가 두 번째 문자열의 문자의 일부에 포함되는지 확인하는 isSubsequence라는 함수를 작성합니다. 즉, 이 함수는 첫 번째 문자열의 문자가 순서가 바뀌지 않고 두 번째 문자열의 어딘가에 나타나는지 확인해야 합니다.

예시:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)

* 솔루션에는 최소한 다음과 같은 복잡성이 있어야 합니다:
Time Complexity - O(N + M)
Space Complexity - O(1)
*
* */
// 지민 version
const isSubSequence = (string: string, comparingString: string) => {
    const spaceRemovedString = comparingString.replace(/[^a-z]/gi, '');
    const splitString = string.split('');
    const splitNoSpaceString = spaceRemovedString.split('');
    let prevFoundIndex = 0

    for (let i = 0; i < splitString.length; i++) {
        const foundIndex = splitNoSpaceString.indexOf(splitString[i]);
        if (foundIndex !== -1 && prevFoundIndex > foundIndex) {
            return false
        }
    }
    return true
}

// 솔루션 반복문
const isSubSequenceByLoop = (string: string, comparingString: string) => {
    let i = 0;
    let j = 0;
    if (!string) {
        return true;
    }

    while (j < comparingString.length) {
        if (comparingString[j] === string[i]) {
            i++;
        }
        if (i === string.length) {
            return true;
        }
        j++;
    }
    return false;
}

// 솔루션 - O(1) 공간이 아닌 재귀
const isSubSequenceBySelf = (string: string, comparingString: string) => {
    if (string.length === 0) {
        return true;
    }
    if (comparingString.length === 0) {
        return false;
    }
    if (string[0] === comparingString[0]) {
        return isSubSequenceBySelf(string.slice(1), comparingString.slice(1));
    }
    return isSubSequenceBySelf(string, comparingString.slice(1))
}

