/*
* implement a function called countUniqueValues, which accepts a sorted array and counts the unique values in the array.
* There can be negative numbers in the array, but it will always be sorted.
*
* countUniqueValues([1,1,1,1,1,2]) // 2
* countUniqueValues([1,2,3,4,4,4,5,5,12,12,12,13]) // 7
* countUniqueValues([]) // 0
* countUniqueValues([-2,-1, -1, 0, 1]) // 4
* */

/* Naive version  >> 실패 */
const countUniqueValues = (array: number[]) => {
    if (array.length === 0) {
        return 0;
    }

    let initialIndex = 0;
    let secondaryIndex = 1;

    while (secondaryIndex < array.length) {
        if (array[initialIndex] !== array[secondaryIndex]) {
            initialIndex++;
            array[initialIndex] = array[secondaryIndex]
        } else {
            secondaryIndex++;
        }
    }
    return initialIndex + 1
}

/*Refactored Version*/
/* while 문을 사용하지 않음으로써 위의 else 구문이 사라졌다....그냥 For 루프를 사용할것 ㅜㅜㅜㅜㅜ */
const countUniqueValuesRefactored = (array: number[]) => {
    let i = 0;
    for (let j = 1; j < array.length; j++) {
        if (array[i] !== array[j]) {
            i++;
            array[i] = array[j];
        }
    }
    return i + 1;
}