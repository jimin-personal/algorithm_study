/*
power
밑과 지수를 받아들이는 power라는 함수를 작성합니다.
이 함수는 밑의 거듭제곱을 지수로 반환해야 합니다.
이 함수는 Math.pow()의 기능을 모방해야 합니다.
음의 밑과 지수에 대해서는 신경쓰지 마세요.
* */

//Naive
function power(base:number, exponent:number) {
    let result;
    if (exponent === 0) {
        return 1;
    }
    return base * power(base, exponent - 1)
}

/*
* 숫자를 받아 해당 숫자의 계승(팩토리얼)을 반환하는 팩토리얼 함수를 작성하시오.팩토리얼은 정수와 그 아래의 모든 정수의 곱입니다.
* 예를 들어, 4 팩토리얼 (4!)은 4 * 3 * 2 * 1 = 2입니다. 팩토리얼 0(0!)은 항상 1입니다.
* */

//Naive
function factorial(number: number) {
    if (number < 0) {
        return 0;
    }
    if (number <= 1) {
        return 1;
    }
    return number * factorial(number - 1)
}

/*
* productOfArray
* 숫자 배열을 받아 모든 숫자의 곱을 반환하는 productOfArray라는 함수를 작성하시오.
* */

//Naive
const productOfArray = (arr: number[]) => {
    if (arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1))
}

/*
* recursiveRange
숫자를 받으면 0부터 함수에 전달된 숫자까지의 모든 숫자를 더하는 recursiveRange라는 함수를 작성하시오.
* */

//Naive
function recursiveRange(number:number) {
    if (number === 0) {
        return 0
    }
    return number + (recursiveRange(number - 1));
}

/*
fib
숫자를 받아 피보나치 수열의 n번째 숫자를 반환하는 fib라는 재귀 함수를 작성하시오.
피보나치 수열은 1, 1로 시작하는 1, 1, 2, 3, 5, 8, ...의 정수의 수열이며,
모든 수는 이전 두 수의 합과 같다는 것을 명심하세요.
*/

//Naive
function fib(number: number) {
    if (number <= 2) {
        return 1;
    }
    return fib(number - 1) + fib(number - 2)

}

/*
* isPalindrome 전달된 문자열이 팔린드롬(앞으로 읽으나 뒤로 읽으나 동일한 문자)인 경우 true 를 반환하는
* isPalindrome 이라는 재귀(recursive) 함수를 작성하시오. 팔린드롬이 아닐 경우 false 를 반환합니다.
* */

//Naive
function isPalindrome(string:string) {
    if (string[0] === string[string.length - 1] && string.length > 1) {
        return isPalindrome(string.slice(1, string.length - 1))
    }
    return string.length <= 1;
}

/*
* 배열과 콜백을 받아들이는 someRecursive 라는 재귀(recursive) 함수를 작성하시오.
* 이 함수는 배열의 단일 값이 콜백에 전달될 때 true를 반환하면 true를 반환합니다.
* 그렇지 않으면 false를 반환합니다.
* */
// Naive code
function someRecursive(array: any[], func: any){
    if (!!array[0] && func(array[0])) {
        return true;
    }
    if (array.length > 1) {
        return someRecursive(array.slice(1), func)
    }
    return false
}

// solution
const someRecursiveFunc = (array: any[], func: any) => {
    if (array.length === 0) {
        return false;
    }
    if (func(array[0])) {
        return true;
    }
    return someRecursiveFunc(array.slice(1), func);
}

/*
* 배열의 배열을 받아들이고 모든 값이 평활화(flattened)된 새 배열을 반환하는 flatten이라는 재귀(recursive ) 함수를 작성합니다.
* */
const flatten = (oldArr: any[]) => {
    let newArr = [];
    for (let i=0; i < oldArr.length; i++) {
        if (Array.isArray(oldArr[i])) { // isArray라는 메소드를 기억....
            newArr = newArr.concat(flatten(oldArr[i]));
        } else {
            newArr.push(oldArr[i]);
        }
    }
    return newArr
}


/*
*
* capitalizeFirst
capitalizeFirst라는 재귀 함수를 작성하시오.
문자열 배열이 주어지면 배열에 있는 각 문자열의 첫 글자를 대문자로 바꿔주는 함수입니다.
*
* */
// 왜 이렇게 풀어야하는지 전혀 모르겠따....................
function capitalizeFirst (array: string[]) {
    if (array.length === 1) {
        return [array[0][0].toUpperCase() + array[0].slice(1)];
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].slice(1);
    res.push(string);
    return res;
}


/*
*
* nestedEvenSum
* nestedEvenSum이라는 재귀 함수를 작성하시오.
* 중첩된(nested) 객체를 포함할 수 있는 객체에서 모든 짝수의 합계를 반환하는 함수입니다.
*
* */
// Naive code
function nestedEvenSum (object: any) {
    const keys = Object.keys(object);
    let nestedSum = 0;
    for(let i = 0; i < keys.length ; i++) {
        if (typeof object[`${keys[i]}`] === 'object'){
            nestedSum += nestedEvenSum(object[keys[i]])
        } else if(typeof object[`${keys[i]}`] === 'number' && object[`${keys[i]}`] % 2 === 0 ) {
            nestedSum += object[keys[i]]
        }
    }
    return nestedSum;
}

// solution
function nestedEvenSumBySolution (obj, sum=0) {
    for (let key in obj) {
        if (typeof obj[key] === 'object'){
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
            sum += obj[key];
        }
    }
    return sum;
}
