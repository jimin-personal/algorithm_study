/*
* O(N) 문제
* Given a sorted array of integers, write a function called search, that accepts a value and returns the
* index where the value passed to the function is located. If the value is not found return -1
*
* search([1,2,3,4,5,6],6) >> 5
* search([1,2,3,4,5,6],11) >> -1
* */

/*Naive code*/
const searchNaive = (arr: number[], value: number) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

/*Refactored code*/
/*이진탐색 (Log(N)) - 배열을 나눠서 탐색한다  .(중간값기준)*/
const searchRefactored = (arr: number[], value: number) => {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        const middle = Math.floor((min + max) / 2);
        const currentElement = arr[middle];

        if (arr[middle] < value) {
            min = middle + 1
        } else if (arr[middle] > value) {
            max = middle - 1
        } else {
            return middle;
        }
    }
    return -1
}