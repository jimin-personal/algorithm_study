/*
* 자바스크립트의 객체를 사용해 다양한 값과 빈도를 수집하는 것. O(N^2) operations with arrays/strings
*
* */

/*
예시: Write a function called same, which accepts two arrays.
The function should return true if every value in the array has
it's corresponding value squared in the second array.
The frequency of values must be the same.

same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)

*/
// 일반 적인 풀이 N^2 (for문 내부의 indexOf 가 중첩루프의 역할을 해서 Big O notation 이 N^2)
const same = (arr1: number[], arr2: number[]) => {
    // 두 배열의 원소의 갯수가 일치않아서 기준에 맞지 않음.
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        // arr2 에서 arr1의 제곱된 원소를 검색
        const correctIndex = arr2.indexOf(arr1[i] ** 2);
        // arr2 에서 arr1의 제곱된 원소를 찾을 수 없다면 기준에 맞지 않음
        if (correctIndex === -1) {
            return false;
        }
        // 재검색 방지를 위해서 해당 원소 잘라내기
        arr2.splice(correctIndex, 1)
    }
    return true;
}

// 빈도카운터 패턴 적용 O(n) : 두개의 루프가 중첩된 루프보다 낫다. 루프를 여러개 사용해서 속도를 높임.
const sameAnother = (arr1: number[], arr2: number[]) => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    const frequencyCounter1 = {}
    const frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for (let key in frequencyCounter1) {
        if (!(Number(key) ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[Number(key) ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

