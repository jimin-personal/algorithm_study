/*
* Write a function called sumZero which accepts a sorted array of integers.
* The function should find the first pair where the sum is 0. Return an array that includes
* both values that sum to zero or undefined if a pair does not exist.
*
* 정렬된 정수 배열을 받아들이는 sumZero 라는 함수를 작성하세요. 이 함수는 합이 0인 첫 번째 쌍을 찾아야 합니다.
* 합이 0이 되는 두 값을 모두 포함하는 배열을 반환하거나 쌍이 존재하지 않으면 정의되지 않은 배열을 반환합니다.
*
* sumZero([-3, -2, -1, 0, 1 , 2 , 3]) >> [-3,3]
* sumZero([-2,0,1,3]) // undefined
* sumZero([1,2,3]) // undefined
* */

// 다중루프문 사용 O(N^2); 공간복잡도 O(1)
const sumZeroNaive = (arr: number[]) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}
// 공간복잡도 O(1), 시간복잡도 O(N)
const sumZeroRefactored = (arr: number[]) => {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}